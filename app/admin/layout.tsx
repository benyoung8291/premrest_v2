'use client';

import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f5f5' }}>
      {/* Sidebar */}
      <aside style={{
        width: 250,
        background: '#2e3133',
        color: '#fff',
        padding: '24px 0',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #4a4e51' }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#d1703c', margin: 0 }}>Premrest CMS</h1>
          <p style={{ fontSize: 12, color: '#a3a7a9', margin: '4px 0 0' }}>Content Management</p>
        </div>
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {[
            { href: '/admin', label: 'Dashboard', icon: '◉' },
            { href: '/admin/resources', label: 'Resources', icon: '◎' },
            { href: '/admin/people', label: 'People', icon: '◑' },
            { href: '/admin/projects', label: 'Projects', icon: '◐' },
            { href: '/admin/categories', label: 'Categories', icon: '◈' },
            { href: '/admin/tags', label: 'Tags', icon: '◇' },
            { href: '/admin/industries', label: 'Industries', icon: '◆' },
          ].map(item => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 20px',
                  color: isActive ? '#d1703c' : '#c9cbcc',
                  background: isActive ? 'rgba(209,112,60,0.1)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  borderLeft: isActive ? '3px solid #d1703c' : '3px solid transparent',
                  transition: 'all 0.15s',
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            );
          })}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #4a4e51' }}>
          <a href="/" style={{ color: '#a3a7a9', textDecoration: 'none', fontSize: 13, display: 'block', marginBottom: 8 }}>
            ← Back to site
          </a>
          <button
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#a3a7a9',
              cursor: 'pointer',
              fontSize: 13,
              padding: 0,
            }}
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: 32, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
