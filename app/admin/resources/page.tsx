'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, DataTable, Modal, FormField, Input, TextArea, Select, PrimaryButton, SecondaryButton, Badge } from '../components/AdminUI';

interface Resource {
  id: string;
  name: string;
  slug: string;
  summary: string | null;
  content: string | null;
  featuredImageUrl: string | null;
  videoUrl: string | null;
  videoThumbnail: string | null;
  isDraft: boolean;
  isArchived: boolean;
  categoryId: string | null;
  contentTypeId: string | null;
  category: { id: string; name: string } | null;
  contentType: { id: string; name: string } | null;
  authors: { person: { id: string; name: string } }[];
  tags: { tag: { id: string; name: string } }[];
}

interface Option { id: string; name: string; slug?: string }

const emptyForm = {
  id: '',
  name: '',
  slug: '',
  summary: '',
  content: '',
  featuredImageUrl: '',
  videoUrl: '',
  videoThumbnail: '',
  categoryId: '',
  contentTypeId: '',
  authorIds: [] as string[],
  tagIds: [] as string[],
  isDraft: false,
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [categories, setCategories] = useState<Option[]>([]);
  const [contentTypes, setContentTypes] = useState<Option[]>([]);
  const [people, setPeople] = useState<Option[]>([]);
  const [tags, setTags] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const fetchResources = useCallback(() => {
    fetch(`/api/admin/resources?page=${page}&limit=20`)
      .then(res => {
        if (res.status === 401) { router.push('/admin/login'); return null; }
        return res.json();
      })
      .then(data => {
        if (data) {
          setResources(data.resources);
          setTotalPages(data.totalPages);
        }
      })
      .finally(() => setLoading(false));
  }, [page, router]);

  useEffect(() => {
    fetchResources();
    // Load dropdown options
    Promise.all([
      fetch('/api/admin/categories').then(r => r.json()),
      fetch('/api/admin/content-types').then(r => r.json()),
      fetch('/api/admin/people').then(r => r.json()),
      fetch('/api/admin/tags').then(r => r.json()),
    ]).then(([catData, ctData, pplData, tagData]) => {
      setCategories(catData.categories || []);
      setContentTypes(ctData.contentTypes || []);
      setPeople(pplData.people || []);
      setTags(tagData.tags || []);
    });
  }, [fetchResources]);

  function openNew() {
    setForm(emptyForm);
    setModalOpen(true);
  }

  function openEdit(row: Record<string, unknown>) {
    const r = row as unknown as Resource;
    setForm({
      id: r.id,
      name: r.name,
      slug: r.slug,
      summary: r.summary || '',
      content: r.content || '',
      featuredImageUrl: r.featuredImageUrl || '',
      videoUrl: r.videoUrl || '',
      videoThumbnail: r.videoThumbnail || '',
      categoryId: r.categoryId || '',
      contentTypeId: r.contentTypeId || '',
      authorIds: r.authors?.map(a => a.person.id) || [],
      tagIds: r.tags?.map(t => t.tag.id) || [],
      isDraft: r.isDraft,
    });
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    const method = form.id ? 'PUT' : 'POST';
    const res = await fetch('/api/admin/resources', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setModalOpen(false);
      fetchResources();
    }
    setSaving(false);
  }

  async function handleDelete(row: Record<string, unknown>) {
    if (!confirm('Delete this resource?')) return;
    await fetch(`/api/admin/resources?id=${row.id}`, { method: 'DELETE' });
    fetchResources();
  }

  function generateSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#7d8285' }}>Loading...</div>;

  const tableRows = resources.map(r => ({
    ...r,
    typeName: r.contentType?.name || '—',
    categoryName: r.category?.name || '—',
    authorNames: r.authors?.map(a => a.person.name).join(', ') || '—',
    status: r.isDraft ? 'Draft' : r.isArchived ? 'Archived' : 'Published',
  }));

  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Articles, podcasts, case studies, and webinars"
        action={<PrimaryButton onClick={openNew}>+ New Resource</PrimaryButton>}
      />

      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'typeName', label: 'Type', width: 100 },
          { key: 'categoryName', label: 'Category', width: 100 },
          { key: 'authorNames', label: 'Authors', width: 160 },
          { key: 'status', label: 'Status', width: 90 },
        ]}
        rows={tableRows}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      {totalPages > 1 && (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                padding: '6px 12px',
                border: '1px solid #e4e5e6',
                borderRadius: 6,
                background: page === i + 1 ? '#d1703c' : '#fff',
                color: page === i + 1 ? '#fff' : '#4a4e51',
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={form.id ? 'Edit Resource' : 'New Resource'}>
        <FormField label="Name">
          <Input
            value={form.name}
            onChange={(e) => {
              const name = e.target.value;
              setForm(f => ({ ...f, name, slug: f.id ? f.slug : generateSlug(name) }));
            }}
            placeholder="Resource title"
          />
        </FormField>

        <FormField label="Slug">
          <Input value={form.slug} onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))} />
        </FormField>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormField label="Content Type">
            <Select value={form.contentTypeId} onChange={(e) => setForm(f => ({ ...f, contentTypeId: e.target.value }))}>
              <option value="">Select type...</option>
              {contentTypes.map(ct => <option key={ct.id} value={ct.id}>{ct.name}</option>)}
            </Select>
          </FormField>

          <FormField label="Category">
            <Select value={form.categoryId} onChange={(e) => setForm(f => ({ ...f, categoryId: e.target.value }))}>
              <option value="">Select category...</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </Select>
          </FormField>
        </div>

        <FormField label="Summary">
          <TextArea
            value={form.summary}
            onChange={(e) => setForm(f => ({ ...f, summary: e.target.value }))}
            placeholder="Brief summary..."
            style={{ minHeight: 60 }}
          />
        </FormField>

        <FormField label="Content (HTML)">
          <TextArea
            value={form.content}
            onChange={(e) => setForm(f => ({ ...f, content: e.target.value }))}
            placeholder="HTML content..."
            style={{ minHeight: 120, fontFamily: 'monospace', fontSize: 12 }}
          />
        </FormField>

        <FormField label="Featured Image URL">
          <Input
            value={form.featuredImageUrl}
            onChange={(e) => setForm(f => ({ ...f, featuredImageUrl: e.target.value }))}
            placeholder="https://..."
          />
        </FormField>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormField label="Video URL">
            <Input
              value={form.videoUrl}
              onChange={(e) => setForm(f => ({ ...f, videoUrl: e.target.value }))}
              placeholder="YouTube URL..."
            />
          </FormField>
          <FormField label="Video Thumbnail">
            <Input
              value={form.videoThumbnail}
              onChange={(e) => setForm(f => ({ ...f, videoThumbnail: e.target.value }))}
              placeholder="Thumbnail URL..."
            />
          </FormField>
        </div>

        <FormField label="Authors">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {form.authorIds.map(id => {
              const person = people.find(p => p.id === id);
              return person ? (
                <Badge key={id}>
                  {person.name}
                  <button
                    onClick={() => setForm(f => ({ ...f, authorIds: f.authorIds.filter(a => a !== id) }))}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 4, color: 'inherit', fontSize: 12 }}
                  >×</button>
                </Badge>
              ) : null;
            })}
          </div>
          <Select
            value=""
            onChange={(e) => {
              if (e.target.value && !form.authorIds.includes(e.target.value)) {
                setForm(f => ({ ...f, authorIds: [...f.authorIds, e.target.value] }));
              }
            }}
          >
            <option value="">Add author...</option>
            {people.filter(p => !form.authorIds.includes(p.id)).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Tags">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {form.tagIds.map(id => {
              const tag = tags.find(t => t.id === id);
              return tag ? (
                <Badge key={id} color="#2e3133">
                  {tag.name}
                  <button
                    onClick={() => setForm(f => ({ ...f, tagIds: f.tagIds.filter(t => t !== id) }))}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 4, color: 'inherit', fontSize: 12 }}
                  >×</button>
                </Badge>
              ) : null;
            })}
          </div>
          <Select
            value=""
            onChange={(e) => {
              if (e.target.value && !form.tagIds.includes(e.target.value)) {
                setForm(f => ({ ...f, tagIds: [...f.tagIds, e.target.value] }));
              }
            }}
          >
            <option value="">Add tag...</option>
            {tags.filter(t => !form.tagIds.includes(t.id)).map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Status">
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            <input
              type="checkbox"
              checked={form.isDraft}
              onChange={(e) => setForm(f => ({ ...f, isDraft: e.target.checked }))}
            />
            Save as draft
          </label>
        </FormField>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 24 }}>
          <SecondaryButton onClick={() => setModalOpen(false)}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : form.id ? 'Update' : 'Create'}
          </PrimaryButton>
        </div>
      </Modal>
    </div>
  );
}
