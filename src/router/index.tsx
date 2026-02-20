import { createBrowserRouter, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { lazyLoad } from './LazyLoad';
import NotFound from '../views/NotFound';
import Login from '../views/login';
import Layout from '../layout';
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/welcome',
                element: lazyLoad(lazy(() => import('../views/welcome'))),
            },
            {
                path: '/dashboard',
                element: lazyLoad(lazy(() => import('../views/dashboard'))),
            },
            {
                path: '/userList',
                element: lazyLoad(lazy(() => import('../views/user'))),
            },
            {
                path: '/deptList',
                element: lazyLoad(lazy(() => import('../views/dept'))),
            },
            {
                path: '/menuList',
                element: lazyLoad(lazy(() => import('../views/menu'))),
            },
            {
                path: '/roleList',
                element: lazyLoad(lazy(() => import('../views/role'))),
            },
        ],
    },
    { path: '/', element: <Navigate to="/welcome" /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
]);
export default router;
