export default function JobCard({ setCardHover, setActiveCard }) {
    return (
        <div className="absolute -left-30 mt-16 mr-5 overflow-x-hidden w-lg h-[70vh] bg-white shadow-lg rounded-md z-30 p-4 border border-gray-200"
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => {
                setCardHover(false);
                setActiveCard(null);
            }}
        >
            <div className="grid grid-cols-2 gap-6 items-stretch h-full">
                {/* Column 1 */}
                <div>
                    <ul className="space-y-2 p-2 pr-4 border-r border-gray-300 h-full">
                        <li className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer">Top Locations</li>
                        <li className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer">Profile</li>
                        <li className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer">Top Categories</li>
                        <li className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer">Explore More Internships</li>
                        <li className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer">
                            Placement Guarantee Courses
                            <span className='px-2 ml-1 py-0.5 bg-amber-400 text-white text-sm font-semibold rounded-lg'>NEW</span>
                        </li>

                    </ul>
                </div>

                {/* Column 2 */}

                <div className="pl-4 h-full">
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Work form Home</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Delhi</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Bangalore</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Hyderabad</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Mumbai</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Surat</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Pune</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Jobs in Kolkata</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internation Jobs</li>
                    </ul>
                </div>


            </div>


        </div>
    )
}
