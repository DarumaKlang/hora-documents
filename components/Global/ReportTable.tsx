// Component สำหรับตารางรายงาน
const ReportTable = () => (
    <div className="bg-white border border-package-border rounded-lg shadow-sm overflow-hidden">
        <h4 className="font-semibold text-lg p-4 bg-gray-50 border-b">รายงานย่อเมฆมงคล 15 รายชื่อ</h4>
        <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันเกิด</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราศีไทย</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราศีเมษ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เพศ</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ความหมาย</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ศิริกานต์</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">24</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ราศีธนู</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Si Ra Kan</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">หญิง</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ผู้มีพรสวรรค์ดีเด่น</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default ReportTable;