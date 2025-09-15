// /src/app/api/mahataksa/route.ts

import { NextResponse } from 'next/server';
import {
    mahataksaData,
    taksaPakornData,
    dailyColorData,
    taksaElementsData,
    chaiyapumeTaksaData,
    taksaPowerData
} from '@/data/mahataksaData';

export async function GET() {
    // รวมข้อมูลทั้งหมดใน object เดียว
    const allData = {
        mahataksa: mahataksaData,
        taksaPakorn: taksaPakornData,
        dailyColor: dailyColorData,
        taksaElements: taksaElementsData,
        chaiyapumeTaksa: chaiyapumeTaksaData,
        taksaPower: taksaPowerData
    };

    return NextResponse.json(allData, { status: 200 });
}