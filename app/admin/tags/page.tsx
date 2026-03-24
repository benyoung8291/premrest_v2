'use client';
import SimpleCrudPage from '../components/SimpleCrudPage';

export default function TagsPage() {
  return <SimpleCrudPage title="Tags" subtitle="Content tags" apiPath="/api/admin/tags" dataKey="tags" />;
}
