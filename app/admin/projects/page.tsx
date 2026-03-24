'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, DataTable, Modal, FormField, Input, TextArea, PrimaryButton, SecondaryButton, Badge } from '../components/AdminUI';

interface Project {
  id: string;
  name: string;
  slug: string;
  summary: string | null;
  description: string | null;
  featuredImageUrl: string | null;
  photos: { id: string; url: string; alt: string | null }[];
  managers: { person: { id: string; name: string } }[];
}

interface Option { id: string; name: string }

const emptyForm = {
  id: '', name: '', slug: '', summary: '', description: '', featuredImageUrl: '',
  managerIds: [] as string[], photos: [] as { url: string; alt?: string }[],
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [people, setPeople] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchProjects = useCallback(() => {
    fetch('/api/admin/projects')
      .then(res => { if (res.status === 401) { router.push('/admin/login'); return null; } return res.json(); })
      .then(data => { if (data) setProjects(data.projects); })
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    fetchProjects();
    fetch('/api/admin/people').then(r => r.json()).then(d => setPeople(d.people || []));
  }, [fetchProjects]);

  function openNew() { setForm(emptyForm); setModalOpen(true); }

  function openEdit(row: Record<string, unknown>) {
    const p = row as unknown as Project;
    setForm({
      id: p.id, name: p.name, slug: p.slug, summary: p.summary || '',
      description: p.description || '', featuredImageUrl: p.featuredImageUrl || '',
      managerIds: p.managers?.map(m => m.person.id) || [],
      photos: p.photos?.map(ph => ({ url: ph.url, alt: ph.alt || undefined })) || [],
    });
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    const method = form.id ? 'PUT' : 'POST';
    const res = await fetch('/api/admin/projects', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) { setModalOpen(false); fetchProjects(); }
    setSaving(false);
  }

  async function handleDelete(row: Record<string, unknown>) {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/admin/projects?id=${row.id}`, { method: 'DELETE' });
    fetchProjects();
  }

  function generateSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#7d8285' }}>Loading...</div>;

  const tableRows = projects.map(p => ({
    ...p,
    managerNames: p.managers?.map(m => m.person.name).join(', ') || '—',
    photoCount: `${p.photos?.length || 0} photos`,
  }));

  return (
    <div>
      <PageHeader title="Projects" subtitle="Portfolio and case studies" action={<PrimaryButton onClick={openNew}>+ New Project</PrimaryButton>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'managerNames', label: 'Managers', width: 180 },
          { key: 'photoCount', label: 'Photos', width: 100 },
        ]}
        rows={tableRows}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={form.id ? 'Edit Project' : 'New Project'}>
        <FormField label="Name">
          <Input value={form.name} onChange={(e) => {
            const name = e.target.value;
            setForm(f => ({ ...f, name, slug: f.id ? f.slug : generateSlug(name) }));
          }} />
        </FormField>
        <FormField label="Slug">
          <Input value={form.slug} onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))} />
        </FormField>
        <FormField label="Summary">
          <TextArea value={form.summary} onChange={(e) => setForm(f => ({ ...f, summary: e.target.value }))} style={{ minHeight: 60 }} />
        </FormField>
        <FormField label="Description (HTML)">
          <TextArea value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} style={{ minHeight: 100, fontFamily: 'monospace', fontSize: 12 }} />
        </FormField>
        <FormField label="Featured Image URL">
          <Input value={form.featuredImageUrl} onChange={(e) => setForm(f => ({ ...f, featuredImageUrl: e.target.value }))} />
        </FormField>
        <FormField label="Project Managers">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {form.managerIds.map(id => {
              const person = people.find(p => p.id === id);
              return person ? (
                <Badge key={id}>
                  {person.name}
                  <button onClick={() => setForm(f => ({ ...f, managerIds: f.managerIds.filter(m => m !== id) }))}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 4, color: 'inherit', fontSize: 12 }}>×</button>
                </Badge>
              ) : null;
            })}
          </div>
          <select
            value=""
            onChange={(e) => {
              if (e.target.value && !form.managerIds.includes(e.target.value)) {
                setForm(f => ({ ...f, managerIds: [...f.managerIds, e.target.value] }));
              }
            }}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid #e4e5e6', borderRadius: 6, fontSize: 14 }}
          >
            <option value="">Add manager...</option>
            {people.filter(p => !form.managerIds.includes(p.id)).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
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
