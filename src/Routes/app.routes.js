import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../Pages/MainPage';
import Layout from '../Components/Layout';
import TestPage from '../Pages/Test';
import Dashboard from '../Pages/Dashboard';
import SignUp from '../Pages/SignUp';

const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="test_Page" element={<TestPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    </Layout>

);

export default AppRoutes;