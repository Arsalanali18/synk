// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

// import App from './app';
// import { routesSection } from './routes/sections';
// import { ErrorBoundary } from './routes/components';

// // ----------------------------------------------------------------------

// const router = createBrowserRouter([
//   {
//     Component: () => (
//       <App>
//         <Outlet />
//       </App>
//     ),
//     errorElement: <ErrorBoundary />,
//     children: routesSection,
//   },
// ]);

// const root = createRoot(document.getElementById('root')!);

// root.render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

// import App from './app';
// import { routesSection } from './routes/sections';
// import { ErrorBoundary } from './routes/components';

// // ----------------------------------------------------------------------

// const router = createBrowserRouter([
//   {
//     Component: () => (
//       <App>
//         <Outlet />
//       </App>
//     ),
//     errorElement: <ErrorBoundary />,
//     children: routesSection,
//   },
// ]);

// const root = createRoot(document.getElementById('root')!);

// // read client id from Vite env (VITE_ prefix)
// const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

// root.render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <RouterProvider router={router} />
//     </GoogleOAuthProvider>
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import { AuthProvider } from 'src/sections/auth/AuthContext'; // ✅ ADD THIS

import App from './app';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider> {/* 🔥 REQUIRED */}
        <RouterProvider router={router} />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);

