import { Star, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
export default function ProfileCard({ setCardHover, setActiveCard }) {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className={`absolute mt-16 overflow-x-hidden w-sm  ${showMore?`h-[85vh]`: `h-[65vh]`} bg-white shadow-lg rounded-md z-30 p-4 border border-gray-200`}
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => {
                setCardHover(false);
                setActiveCard(null);
            }}
        >
            <div className="flex flex-col items-stretch h-full">
                {/* Column 1 */}
                <div className="border-b border-gray-300 py-4 ">
                    <h2 className="font-bold text-gray-800">Rachit Jain</h2>
                    <p className="text-xs text-gray-800 py-1">erachitjain@gmail.com</p>
                </div>

                {/* Column 2 */}

                <div className=' flex justify-between border-b border-gray-300 py-4'>
                    <div className='flex gap-2'>
                        <Star />
                        <p className="text-gray-600">5</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className="text-gray-600">Know More</p>
                        <ChevronRight />

                    </div>
                </div>

                {/* Column 3 */}

                <div className="h-full">
                    <ul className="space-y-2 text-gray-600 mt-5">
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Home</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">My Applications</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">My Bookmarks</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Edit Resume</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Edit Preferences</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Safety Tips</li>
                        <li className="hover:text-blue-500 text-sm p-1 rounded">Help Center</li>
                        <li
                            onClick={() => setShowMore(!showMore)}
                            className="hover:text-blue-500 p-1 rounded flex items-center justify-between cursor-pointer"
                        >
                            More
                            {showMore ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </li>

                        {showMore && (
                            <div className="ml-4 space-y-1">
                                <div className="cursor-pointer text-sm p-1 rounded hover:text-blue-500">Manage Account</div>
                                <div className="cursor-pointer text-sm p-1 rounded hover:text-blue-500">Change Password</div>
                                <div className="cursor-pointer text-sm p-1 rounded hover:text-blue-500">Delete My Account</div>
                                <div className="cursor-pointer text-sm p-1 rounded hover:text-blue-500">Logout</div>
                            </div>
                        )}

                    </ul>
                </div>

            </div>


        </div>
    )
}
