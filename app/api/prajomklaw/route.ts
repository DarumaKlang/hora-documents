// /src/app/api/prajomklaw/route.ts

import { NextResponse } from 'next/server';
import { prajomklawData } from '@/data/prajomklawData';

export async function GET() {
    return NextResponse.json(prajomklawData, { status: 200 });
}