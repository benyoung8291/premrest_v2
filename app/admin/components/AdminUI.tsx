'use client';

import React from 'react';

// Shared styles
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #e4e5e6',
  borderRadius: 6,
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const btnPrimary: React.CSSProperties = {
  padding: '8px 16px',
  background: '#d1703c',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
};

const btnDanger: React.CSSProperties = {
  padding: '6px 12px',
  background: '#dc2626',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  fontSize: 12,
  cursor: 'pointer',
};

const btnSecondary: React.CSSProperties = {
  padding: '8px 16px',
  background: '#e4e5e6',
  color: '#4a4e51',
  border: 'none',
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
};

// ─── Page Header ─────────────────────────────────────────────────────────────

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#2e3133', margin: 0 }}>{title}</h1>
        {subtitle && <p style={{ color: '#7d8285', fontSize: 14, margin: '4px 0 0' }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

// ─── Stat Card ───────────────────────────────────────────────────────────────

export function StatCard({ label, value, href }: { label: string; value: number | string; href?: string }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      {...(href ? { href } : {})}
      style={{
        background: '#fff',
        borderRadius: 10,
        padding: '20px 24px',
        border: '1px solid #e4e5e6',
        textDecoration: 'none',
        display: 'block',
        transition: 'box-shadow 0.15s',
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 700, color: '#2e3133' }}>{value}</div>
      <div style={{ fontSize: 13, color: '#7d8285', marginTop: 4 }}>{label}</div>
    </Wrapper>
  );
}

// ─── Data Table ──────────────────────────────────────────────────────────────

export function DataTable({ columns, rows, onEdit, onDelete }: {
  columns: { key: string; label: string; width?: number }[];
  rows: Record<string, unknown>[];
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (row: Record<string, unknown>) => void;
}) {
  return (
    <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e4e5e6', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#f9fafb' }}>
            {columns.map(col => (
              <th key={col.key} style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 600,
                color: '#4a4e51',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #e4e5e6',
                ...(col.width ? { width: col.width } : {}),
              }}>
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th style={{
                padding: '12px 16px',
                textAlign: 'right',
                fontWeight: 600,
                color: '#4a4e51',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #e4e5e6',
                width: 140,
              }}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} style={{
                padding: '40px 16px',
                textAlign: 'center',
                color: '#a3a7a9',
              }}>
                No items found
              </td>
            </tr>
          ) : rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f4f5f5' }}>
              {columns.map(col => (
                <td key={col.key} style={{ padding: '12px 16px', color: '#2e3133' }}>
                  {String(row[col.key] ?? '')}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    {onEdit && (
                      <button onClick={() => onEdit(row)} style={{ ...btnSecondary, padding: '6px 12px', fontSize: 12 }}>
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button onClick={() => onDelete(row)} style={{ ...btnDanger }}>
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────

export function Modal({ open, onClose, title, children }: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: 32,
        width: '100%',
        maxWidth: 600,
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2e3133', margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#7d8285' }}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── Form Field ──────────────────────────────────────────────────────────────

export function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#4a4e51', marginBottom: 6 }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ ...inputStyle, ...props.style }} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} style={{ ...inputStyle, minHeight: 100, resize: 'vertical', ...props.style }} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={{ ...inputStyle, ...props.style }} />;
}

// ─── Buttons ─────────────────────────────────────────────────────────────────

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} style={{ ...btnPrimary, ...props.style }} />;
}

export function SecondaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} style={{ ...btnSecondary, ...props.style }} />;
}

export function DangerButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} style={{ ...btnDanger, ...props.style }} />;
}

// ─── Badge ───────────────────────────────────────────────────────────────────

export function Badge({ children, color = '#d1703c' }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 600,
      background: `${color}15`,
      color,
    }}>
      {children}
    </span>
  );
}
