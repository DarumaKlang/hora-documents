import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import ApiDataServiceComponent from '@/components/Developers/ApisComponent/ApiDataServiceComponent';

export default function Apis() {
    return (
        <DefaultLayout>
            <ApiDataServiceComponent title="API Services" />
        </DefaultLayout>
    );
}