import { useState } from 'react';

export default function InternshipCard({ setCardHover, setActiveCard }) {
    const [hoveredItem, setHoveredItem] = useState('top-locations');

    const column1Items = [
        {
            id: 'top-locations',
            title: 'Top Locations',
            column2Content: (
                <>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Work form Home</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Delhi</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Bangalore</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Hyderabad</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Mumbai</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Surat</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Pune</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internship in Kolkata</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Internation Internships</li>
                    </ul>
                </>
            )
        },
        {
            id: 'profile',
            title: "Profile",
            column2Content: (
                <>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 p-1 text-sm rounded cursor-pointer">Data Science Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Computer Science Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Marketing Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Finance Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Graphic Design Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Architecture Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Mechanical Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">HR Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Digital Marketing Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Law Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm  rounded cursor-pointer">Electronics Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Content Writing Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Civil Internship</li>
                    </ul>
                </>
            )
        },
        {
            id: 'top-categories',
            title: "Top Categories",
            column2Content: (
                <>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 p-1 text-sm rounded cursor-pointer">Engineering Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Business/MBA Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Part-Time Jobs/Internships</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Finance Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Humanities Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Science Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Internships with Job Offer</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">HR Internship</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Internships for Women</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">View all internships</li>
                    </ul>
                </>
            )
        },
        {
            id: 'explore-more',
            title: "Explore More Internships",
            column2Content: (
                <>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 p-1 text-sm rounded cursor-pointer">Internship by Category</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Computer by Location</li>
                    </ul>
                </>
            )
        },
        {
            id: 'placement-courses',
            title: "Placement Guarantee Courses",
            column2Content: (
                <>
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 p-1 text-sm rounded cursor-pointer">Full Stack Development Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Data Science Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Human Resource Management Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Digital Marketing Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Electric Vehicle Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">UI/UX Design Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Product Management Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Financial Modelling Course</li>
                        <li className="hover:text-blue-500 p-1  text-sm rounded cursor-pointer">Supply Chain Logistics Course</li>
                    </ul>
                </>
            )
        },
    ];

    return (
        <div className="absolute -left-30 mt-16 mr-20 overflow-x-hidden w-lg h-[70vh] bg-white shadow-lg rounded-md z-30 p-4 border border-gray-200"
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => {
                setCardHover(false);
                setActiveCard(null);
            }}
        >
            <div className="grid grid-cols-2 gap-6 items-stretch h-full">
                {/* Column 1 */}
                <div>
                    <ul className="py-4 pr-4 border-r border-gray-300 h-full">
                        {column1Items.map((item) => (
                            <li
                                key={item.id}
                                className="hover:bg-sky-100 hover:text-blue-800 p-2 rounded-r-3xl cursor-pointer"
                                onMouseEnter={() => setHoveredItem(item.id)}
                            >
                                {item.title}
                                {item.id === 'placement-courses' && (
                                    <span className='px-2 ml-1 py-0.5 bg-amber-400 text-white text-sm font-semibold rounded-lg'>NEW</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 - Dynamic Content */}
                <div className='pl-4 h-full'>
                    {hoveredItem
                        ? column1Items.find(item => item.id === hoveredItem)?.column2Content
                        : null
                    }
                </div>
            </div>
        </div>
    );
}