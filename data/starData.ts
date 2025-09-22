// src/data/starData.ts

// กำหนด interface สำหรับการย้ายราศี
export interface Transit {
    sign: string; // ชื่อราศี เช่น 'ราศีตุล'
    targetDate: string; // วันที่และเวลาที่ย้ายราศีในรูปแบบ ISO 8601
}

// กำหนด interface สำหรับดาวเคราะห์แต่ละดวง
export interface Planet {
    id: string; // ID ของดาวเคราะห์ เช่น 'sun'
    name: string; // ชื่อดาวเคราะห์ เช่น 'ดวงอาทิตย์'
    transits: Transit[]; // ข้อมูลการย้ายราศีทั้งหมด
}

// ข้อมูลหลักสำหรับดาวทุกดวง
export const planetsData: Planet[] = [
    {
        id: 'sun',
        name: 'ดวงอาทิตย์',
        transits: [
            { sign: 'ราศีมกร', targetDate: '2025-01-14T17:03:00' },
            { sign: 'ราศีกุมภ์', targetDate: '2025-02-13T03:13:00' },
            { sign: 'ราศีมีน', targetDate: '2025-03-14T20:55:00' },
            { sign: 'ราศีเมษ', targetDate: '2025-04-14T04:30:00' },
            { sign: 'ราศีพฤษภ', targetDate: '2025-05-15T02:06:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-06-15T11:15:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-07-17T03:18:00' },
            { sign: 'ราศีสิงห์', targetDate: '2025-08-17T15:24:00' },
            { sign: 'ราศีกันย์', targetDate: '2025-09-17T17:24:00' },
            { sign: 'ราศีตุล', targetDate: '2025-10-18T05:10:00' },
            { sign: 'ราศีพิจิก', targetDate: '2025-11-17T03:31:00' },
            { sign: 'ราศีธนู', targetDate: '2025-12-16T16:12:00' },
        ],
    },
    {
        id: 'moon',
        name: 'ดวงจันทร์',
        transits: [
            // ข้อมูลการย้ายราศีของดวงจันทร์มีจำนวนมากและมีความถี่สูง
            // แนะนำให้ดึงข้อมูลจาก API หรือคำนวณแบบเรียลไทม์แทนการเก็บในไฟล์นี้
        ],
    },
    {
        id: 'mars',
        name: 'ดาวอังคาร',
        transits: [
            { sign: 'ราศีมิถุน', targetDate: '2025-01-25T01:59:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-04-01T21:11:00' },
            { sign: 'ราศีสิงห์', targetDate: '2025-06-06T05:46:00' },
            { sign: 'ราศีกันย์', targetDate: '2025-07-27T20:26:00' },
            { sign: 'ราศีตุล', targetDate: '2025-09-12T19:47:00' },
            { sign: 'ราศีพิจิก', targetDate: '2025-10-26T08:39:00' },
            { sign: 'ราศีธนู', targetDate: '2025-12-06T19:25:00' },
        ],
    },
    {
        id: 'mercury',
        name: 'ดาวพุธ',
        transits: [
            { sign: 'ราศีธนู', targetDate: '2025-01-02T20:12:00' },
            { sign: 'ราศีมกร', targetDate: '2025-01-20T01:11:00' },
            { sign: 'ราศีกุมภ์', targetDate: '2025-02-05T23:14:00' },
            { sign: 'ราศีมีน', targetDate: '2025-02-27T19:45:00' },
            { sign: 'ราศีกุมภ์', targetDate: '2025-03-16T16:34:00' },
            { sign: 'ราศีมีน', targetDate: '2025-04-11T15:15:00' },
            { sign: 'ราศีเมษ', targetDate: '2025-05-01T16:21:00' },
            { sign: 'ราศีพฤษภ', targetDate: '2025-05-17T20:08:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-06-03T00:35:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-06-23T01:05:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-07-19T09:51:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-08-03T08:55:00' },
            { sign: 'ราศีสิงห์', targetDate: '2025-08-25T21:24:00' },
            { sign: 'ราศีกันย์', targetDate: '2025-09-11T18:36:00' },
            { sign: 'ราศีตุล', targetDate: '2025-09-28T17:15:00' },
            { sign: 'ราศีพิจิก', targetDate: '2025-10-23T23:37:00' },
            { sign: 'ราศีตุล', targetDate: '2025-10-31T19:32:00' },
            { sign: 'ราศีพิจิก', targetDate: '2025-12-07T03:24:00' },
            { sign: 'ราศีธนู', targetDate: '2025-12-26T04:48:00' },
        ],
    },
    {
        id: 'jupiter',
        name: 'ดาวพฤหัสบดี',
        transits: [
            { sign: 'ราศีมิถุน', targetDate: '2025-05-13T22:50:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-10-02T19:50:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-12-23T07:36:00' },
        ],
    },
    {
        id: 'venus',
        name: 'ดาวศุกร์',
        transits: [
            { sign: 'ราศีมีน', targetDate: '2025-01-28T15:58:00' },
            { sign: 'ราศีเมษ', targetDate: '2025-06-02T00:15:00' },
            { sign: 'ราศีพฤษภ', targetDate: '2025-07-02T16:38:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-07-27T15:51:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-08-22T16:38:00' },
            { sign: 'ราศีสิงห์', targetDate: '2025-09-16T04:30:00' },
            { sign: 'ราศีกันย์', targetDate: '2025-10-11T07:43:00' },
            { sign: 'ราศีตุล', targetDate: '2025-11-04T10:21:00' },
            { sign: 'ราศีพิจิก', targetDate: '2025-11-28T19:43:00' },
            { sign: 'ราศีธนู', targetDate: '2025-12-22T18:11:00' },
        ],
    },
    {
        id: 'saturn',
        name: 'ดาวเสาร์',
        transits: [
            { sign: 'ราศีมีน', targetDate: '2025-05-19T01:56:00' },
            { sign: 'ราศีกุมภ์', targetDate: '2025-08-23T20:19:00' },
            { sign: 'ราศีมีน', targetDate: '2026-02-13T10:16:00' },
            { sign: 'ราศีเมษ', targetDate: '2028-04-12T11:53:00' },
            { sign: 'ราศีพฤษภ', targetDate: '2030-05-27T12:53:00' },
            { sign: 'ราศีมิถุน', targetDate: '2032-07-04T06:04:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2034-08-11T07:18:00' },
        ],
    },
    {
        id: 'rahu',
        name: 'ดาวราหู',
        transits: [
            { sign: 'ราศีกุมภ์', targetDate: '2025-05-05T09:44:00' },
            { sign: 'ราศีมังกร', targetDate: '2026-11-22T05:05:00' },
            { sign: 'ราศีธนู', targetDate: '2028-06-10T08:26:00' },
            { sign: 'ราศีพิจิก', targetDate: '2029-12-28T12:11:00' },
            { sign: 'ราศีตุล', targetDate: '2031-07-17T07:45:00' },
            { sign: 'ราศีกันย์', targetDate: '2033-02-02T10:54:00' },
        ],
    },
    {
        id: 'ketu',
        name: 'ดาวเกตุ',
        transits: [
            { sign: 'ราศีกันย์', targetDate: '2025-01-30T12:46:00' },
            { sign: 'ราศีสิงห์', targetDate: '2025-03-28T02:46:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2025-05-23T16:46:00' },
            { sign: 'ราศีมิถุน', targetDate: '2025-07-19T06:46:00' },
            { sign: 'ราศีพฤษภ', targetDate: '2025-09-13T20:46:00' },
            { sign: 'ราศีเมษ', targetDate: '2025-11-09T10:46:00' },
        ],
    },
    {
        id: 'uranus',
        name: 'ดาวมฤตยู',
        transits: [
            { sign: 'ราศีมิถุน', targetDate: '2029-07-18T18:18:00' },
            { sign: 'ราศีกรกฎ', targetDate: '2036-08-06T00:45:00' },
            { sign: 'ราศีสิงห์', targetDate: '2043-08-28T18:53:00' },
            { sign: 'ราศีกันย์', targetDate: '2050-09-19T17:10:00' },
            { sign: 'ราศีตุล', targetDate: '2057-10-09T09:09:00' },
        ],
    },
];