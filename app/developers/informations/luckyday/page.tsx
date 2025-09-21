import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import LuckyDayData from '@/components/Developers/LucyDayDataComponent';

export default function LuckyDayDataPage() {
    return (
        <DefaultLayout>
            <LuckyDayData title="ดิถีฤกษ์ไชย" />
        </DefaultLayout>
    );
}