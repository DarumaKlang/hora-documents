// src/app/page.tsx
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import MainPage from '@/components/MainPage';

export default function Home() {
    return (
        <DefaultLayout>
            <MainPage />
        </DefaultLayout>
    );
}