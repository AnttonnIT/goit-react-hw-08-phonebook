import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export function Layout() {
  return (
    <>
      <AppBar></AppBar>
      <Suspense fallback={null}>
        <Outlet></Outlet>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
