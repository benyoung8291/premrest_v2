'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, DataTable, Modal, FormField, Input, Select, PrimaryButton, SecondaryButton } from '../components/AdminUI';

interface Person {
  id: string;
  name: string;
  title: string | null;
  slug: string;
  photoUrl: string | null;
  email: string | null;
  phone: string | null;
  linkedin: string | null;
  department: string | null;
  sortOrder: number;
  displayContactInfo: boolean;
  displayResources: boolean;
  isArchived: boolean;
  isDraft: boolean;
}

const emptyForm = {
  id: '', name: '', title: '', slug: '', photoUrl: '', email: '', phone: '',
  linkedin: '', department: '', sortOrder: 0, displayContactInfo: false,
  displayResources: false, isArchived: false, isDraft: false,
};

export default function PeoplePage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchPeople = useCallback(() => {
    fetch('/api/admin/people')
      .then(res => {
        if (res.status === 401) { router.push('/admin/login'); return null; }
        return res.json();
      })
      .then(data => { if (data) setPeople(data.people); })
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => { fetchPeople(); }, [fetchPeople]);

  function openNew() { setForm(emptyForm); setModalOpen(true); }

  function openEdit(row: Record<string, unknown>) {
    const p = row as unknown as Person;
    setForm({
      id: p.id, name: p.name, title: p.title || '', slug: p.slug,
      photoUrl: p.photoUrl || '', email: p.email || '', phone: p.phone || '',
      linkedin: p.linkedin || '', department: p.department || '',
      sortOrder: p.sortOrder, displayContactInfo: p.displayContactInfo,
      displayResources: p.displayResources, isArchived: p.isArchived, isDraft: p.isDraft,
    });
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    const method = form.id ? 'PUT' : 'POST';
    const res = await fetch('/api/admin/people', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) { setModalOpen(false); fetchPeople(); }
    setSaving(false);
  }

  async function handleDelete(row: Record<string, unknown>) {
    if (!confirm('Delete this person?')) return;
    await fetch(`/api/admin/people?id=${row.id}`, { method: 'DELETE' });
    fetchPeople();
  }

  function generateSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#7d8285' }}>Loading...</div>;

  const tableRows = people.map(p => ({
    ...p,
    displayTitle: p.title || '—',
    displayEmail: p.email || '—',
    status: p.isArchived ? 'Archived' : p.isDraft ? 'Draft' : 'Active',
  }));

  return (
    <div>
      <PageHeader title="People" subtitle="Team members and contributors" action={<PrimaryButton onClick={openNew}>+ New Person</PrimaryButton>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'displayTitle', label: 'Title' },
          { key: 'displayEmail', label: 'Email' },
          { key: 'sortOrder', label: 'Order', width: 70 },
          { key: 'status', label: 'Status', width: 90 },
        ]}
        rows={tableRows}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={form.id ? 'Edit Person' : 'New Person'}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormField label="Name">
            <Input value={form.name} onChange={(e) => {
              const name = e.target.value;
              setForm(f => ({ ...f, name, slug: f.id ? f.slug : generateSlug(name) }));
            }} />
          </FormField>
          <FormField label="Title/Role">
            <Input value={form.title} onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))} />
          </FormField>
        </div>

        <FormField label="Slug">
          <Input value={form.slug} onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))} />
        </FormField>

        <FormField label="Photo URL">
          <Input value={form.photoUrl} onChange={(e) => setForm(f => ({ ...f, photoUrl: e.target.value }))} placeholder="https://..." />
        </FormField>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormField label="Email">
            <Input value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} type="email" />
          </FormField>
          <FormField label="Phone">
            <Input value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
          </FormField>
        </div>

        <FormField label="LinkedIn URL">
          <Input value={form.linkedin} onChange={(e) => setForm(f => ({ ...f, linkedin: e.target.value }))} placeholder="https://linkedin.com/in/..." />
        </FormField>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormField label="Department">
            <Input value={form.department} onChange={(e) => setForm(f => ({ ...f, department: e.target.value }))} />
          </FormField>
          <FormField label="Sort Order">
            <Input type="number" value={form.sortOrder} onChange={(e) => setForm(f => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))} />
          </FormField>
        </div>

        <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
            <input type="checkbox" checked={form.displayContactInfo} onChange={(e) => setForm(f => ({ ...f, displayContactInfo: e.target.checked }))} />
            Show contact info
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
            <input type="checkbox" checked={form.displayResources} onChange={(e) => setForm(f => ({ ...f, displayResources: e.target.checked }))} />
            Show resources
          </label>
        </div>

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
