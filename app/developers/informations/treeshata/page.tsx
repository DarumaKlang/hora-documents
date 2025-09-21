import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import TreeshataDataComponent from '@/components/Developers/TreeshataDataComponent';

export default function ContentsPage() {
    return (
        <DefaultLayout>
            <TreeshataDataComponent title="พฤกษาชาตา" />
        </DefaultLayout>
    );
}