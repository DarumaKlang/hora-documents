// src/app/contents/page.tsx
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import EmptyPageTemplate from '@/components/EmptyPageTemplate';

export default function ContentsPage() {
    return (
        <DefaultLayout>
            <EmptyPageTemplate title="หน้าบทความ" />
        </DefaultLayout>
    );
}