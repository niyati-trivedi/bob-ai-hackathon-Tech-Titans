import { createRootRoute, Outlet } from '@tanstack/react-router';
import React from 'react';
import '../styles.css';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100">
      <Outlet />
    </div>
  );
}
