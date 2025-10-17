// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ThemeChanger  from './components/ThemeChange';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ThemeChanger />} />
            </Routes>
        </BrowserRouter>
    );
}
