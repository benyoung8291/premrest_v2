'use client';
import SimpleCrudPage from '../components/SimpleCrudPage';

export default function IndustriesPage() {
  return <SimpleCrudPage title="Industries" subtitle="Industry categories" apiPath="/api/admin/industries" dataKey="industries" />;
}
