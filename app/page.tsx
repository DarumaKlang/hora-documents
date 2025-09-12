import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <div className="container mx-auto p-4 md:flex md:space-x-4">
        {/* Sidebar Section */}
        <div className="w-full md:w-1/3">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          {/* Card: Services */}
          <div className="bg-white p-6 shadow-lg rounded-lg mb-4">
            <div className="flex items-center text-red-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold">บริการของเรา</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>บริการดูดวงเลข 7 ตัว 9 ฐาน รายปี*</span>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ทำนายสิ่งที่อาจเกิดขึ้นในช่วงเวลานั้นๆ</span>
              </li>
              {/* Add more list items as needed */}
            </ul>
            <div className="text-center mt-6">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                บริการดูดวง
              </button>
            </div>
          </div>
          
          {/* Card: Other Services */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">บริการตั้งชื่อจากดวงชะตากำเนิด</h3>
            <p className="text-sm text-gray-600">
              บริการตั้งชื่อจากดวงชะตากำเนิดของศาสตร์การพยากรณ์เลข 7 ตัว 9 ฐาน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
