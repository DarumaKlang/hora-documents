import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import ApiDataServiceComponent from '@/components/Developers/ApisComponent/ApiDataServiceComponent';
import ApiPrajomklawDataComponent from '@/components/Developers/ApisComponent/ApiPrajomklawDataComponent';

export default function Apis() {
    return (
        <DefaultLayout>
            <div className="p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 flex-1">
                <h2 className="text-2xl font-bold text-teal-800 mb-6">API Services</h2>

                <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    {/* ApiDataServiceComponent จะอยู่ในคอลัมน์บนมือถือและแถวบนเดสก์ท็อป */}
                    <div className="flex-1">
                        <ApiDataServiceComponent />
                        <ApiPrajomklawDataComponent />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}