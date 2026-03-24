'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader, StatCard } from './components/AdminUI';

interface Stats {
  resources: number;
  people: number;
  projects: number;
  categories: number;
  tags: number;
  industries: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(res => {
        if (res.status === 401) { router.push('/admin/login'); return null; }
        return res.json();
      })
      .then(data => { if (data) setStats(data); })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return <div style={{ padding: 40, textAlign: 'center', color: '#7d8285' }}>Loading...</div>;
  }

  if (!stats) return null;

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of your content" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
        marginBottom: 32,
      }}>
        <StatCard label="Resources" value={stats.resources} href="/admin/resources" />
        <StatCard label="People" value={stats.people} href="/admin/people" />
        <StatCard label="Projects" value={stats.projects} href="/admin/projects" />
        <StatCard label="Categories" value={stats.categories} href="/admin/categories" />
        <StatCard label="Tags" value={stats.tags} href="/admin/tags" />
        <StatCard label="Industries" value={stats.industries} href="/admin/industries" />
      </div>

      <div style={{
        background: '#fff',
        borderRadius: 10,
        padding: 24,
        border: '1px solid #e4e5e6',
      }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: '#2e3133', margin: '0 0 12px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { label: 'New Article', href: '/admin/resources?new=article' },
            { label: 'New Podcast', href: '/admin/resources?new=podcast' },
            { label: 'New Person', href: '/admin/people?new=true' },
            { label: 'New Project', href: '/admin/projects?new=true' },
          ].map(action => (
            <a key={action.href} href={action.href} style={{
              padding: '8px 16px',
              background: '#d1703c',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
            }}>
              + {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
