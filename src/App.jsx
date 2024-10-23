// CSS/SCSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from './helper/ProtectedRoutes';
import AuthRoute from './helper/AuthRoute';
import ErrorBoundary from './helper/ErrorBoundary';
import Loader from './components/common/Loader';

const LoginPage = lazy(() => import('./pages/Login'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const ProductsPage = lazy(() => import('./pages/Products'));
const UsersManagement = lazy(() => import('./pages/UserManagements'));
const NotFoundPage = lazy(() => import('./helper/NotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "dashboard",
          errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<Loader />}>
              <ProtectedRoute element={DashboardPage} />
            </Suspense>
          ),
        },
        {
          path: "products",
          errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<Loader />}>
              <ProtectedRoute element={ProductsPage} />
            </Suspense>
          ),
        },
        {
          path: "user-management",
          errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<Loader />}>
              <ProtectedRoute element={UsersManagement} />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <AuthRoute element={LoginPage} />,
        },
        {
          path: "login",
          element: <AuthRoute element={LoginPage} />,
        },
      ],
    },
  ]);
  

  return (
        <RouterProvider router={router}/>
  )
}

export default App
