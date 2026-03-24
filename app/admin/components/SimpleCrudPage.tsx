'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, DataTable, Modal, FormField, Input, PrimaryButton, SecondaryButton } from './AdminUI';

interface Item {
  id: string;
  name: string;
  slug: string;
  sortOrder?: number;
}

interface SimpleCrudPageProps {
  title: string;
  subtitle: string;
  apiPath: string;
  dataKey: string;
  showSortOrder?: boolean;
}

export default function SimpleCrudPage({ title, subtitle, apiPath, dataKey, showSortOrder }: SimpleCrudPageProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ id: '', name: '', slug: '', sortOrder: 0 });
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchItems = useCallback(() => {
    fetch(apiPath)
      .then(res => { if (res.status === 401) { router.push('/admin/login'); return null; } return res.json(); })
      .then(data => { if (data) setItems(data[dataKey] || []); })
      .finally(() => setLoading(false));
  }, [apiPath, dataKey, router]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  function openNew() { setForm({ id: '', name: '', slug: '', sortOrder: 0 }); setModalOpen(true); }

  function openEdit(row: Record<string, unknown>) {
    const item = row as unknown as Item;
    setForm({ id: item.id, name: item.name, slug: item.slug, sortOrder: item.sortOrder || 0 });
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    const method = form.id ? 'PUT' : 'POST';
    const res = await fetch(apiPath, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) { setModalOpen(false); fetchItems(); }
    setSaving(false);
  }

  async function handleDelete(row: Record<string, unknown>) {
    if (!confirm(`Delete "${row.name}"?`)) return;
    await fetch(`${apiPath}?id=${row.id}`, { method: 'DELETE' });
    fetchItems();
  }

  function generateSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#7d8285' }}>Loading...</div>;

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'slug', label: 'Slug' },
    ...(showSortOrder ? [{ key: 'sortOrder', label: 'Order', width: 80 }] : []),
  ];

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} action={<PrimaryButton onClick={openNew}>+ New {title.replace(/s$/, '')}</PrimaryButton>} />
      <DataTable columns={columns} rows={items as unknown as Record<string, unknown>[]} onEdit={openEdit} onDelete={handleDelete} />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={form.id ? `Edit ${title.replace(/s$/, '')}` : `New ${title.replace(/s$/, '')}`}>
        <FormField label="Name">
          <Input value={form.name} onChange={(e) => {
            const name = e.target.value;
            setForm(f => ({ ...f, name, slug: f.id ? f.slug : generateSlug(name) }));
          }} />
        </FormField>
        <FormField label="Slug">
          <Input value={form.slug} onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))} />
        </FormField>
        {showSortOrder && (
          <FormField label="Sort Order">
            <Input type="number" value={form.sortOrder} onChange={(e) => setForm(f => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))} />
          </FormField>
        )}
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
