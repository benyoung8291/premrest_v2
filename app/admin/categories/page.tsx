'use client';
import SimpleCrudPage from '../components/SimpleCrudPage';

export default function CategoriesPage() {
  return <SimpleCrudPage title="Categories" subtitle="Resource categories" apiPath="/api/admin/categories" dataKey="categories" />;
}
