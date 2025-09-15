import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import InformationGlobalComponent from '@/components/Developers/InformationsComponent/InformationGlobalComponent';

export default function GlobalPage() {
    return (
        <DefaultLayout>
            <InformationGlobalComponent title="การกำหนดค่าพื้นฐาน" />
        </DefaultLayout>
    );
}
