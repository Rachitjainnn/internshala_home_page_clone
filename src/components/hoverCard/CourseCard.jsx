export default function CourseCard({setCardHover,setActiveCard}) {
    return (
        <div className="absolute -left-30 mt-16 mr-20 overflow-x-hidden overflow-y-hidden w-lg h-[70vh] bg-white shadow-lg rounded-md z-30 p-4 border border-gray-200"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => {
            setCardHover(false);
            setActiveCard(null);
        }}
        >
            <div className="grid grid-cols-2 gap-6 items-stretch h-full">
                {/* Column 1 */}
                <div>
                    <h3 className="font-bold text-gray-700 text-sm mt-3">Certification Courses</h3>
                    <ul className="py-4 pr-4 border-r border-gray-300 h-full">
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Web Development</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Machine Learning</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Programming with Python</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Data Science</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Core Java</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Digital Marketing</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Advanced Excel</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">AutoCAD</li>
                    </ul>
                </div>

                {/* Column 2 */}

                <div  className="pl-4 h-full">
                    <h3 className="font-bold text-gray-700 text-sm mt-3">Placement Guarantee Courses</h3>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Data Science Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Digital Marketing Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Product Management Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">UI/UX Design Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Electric Vehicle Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Supply Chain Logistics Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Financial Modelling Course</li>
                    </ul>
                </div>


            </div>


        </div>
    )
}
