import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import YamaCard from '@/components/Developers/YamaCard';
import DailyTravelTimes from '@/components/Developers/DailyTravelTimes';
import UbagongTimes from '@/components/Developers/UbagongTimes';


export default function YamaPage() {
    return (
        <DefaultLayout>
            <YamaCard />
            <DailyTravelTimes />
            <UbagongTimes />
        </DefaultLayout>
    );
}