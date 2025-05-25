import { Star, ChevronRight } from 'lucide-react';

export default function MobileNav({ onClose }) {
  return (
    <>
      {/* Gray overlay background */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10 lg:hidden mt-16"
        onClick={onClose}
      />
      
      {/* Mobile menu content */}
      <div className='fixed top-16 left-0 right-0 bg-white shadow-lg lg:hidden z-20 overflow-y-auto max-h-[calc(100vh-4rem)]'>
        <div className='flex flex-col py-4 px-4'>
          {/* User Profile Section */}
          <div className='flex items-center justify-start gap-2 my-3 border-b border-gray-200 pb-6'>
            <img
              src="https://i.pravatar.cc/36"
              alt="User"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className='flex flex-col'>
              <p className='text-gray-800 font-semibold'>Rachit Jainn</p>
              <p className='text-gray-500 text-xs'>erachitjain@gmail.com</p>
            </div>
          </div>

          {/* Rating Section */}
          <div className='flex gap-5 border-b border-gray-200 pb-3 mb-3'>
            <div className='flex gap-1 items-center justify-center'>
              <Star className='h-4 w-4 text-yellow-500' />
              <p>4</p>
            </div>
            <div className='flex gap-1 items-center justify-center'>
              <p>Know More</p>
              <ChevronRight className='h-4 w-4' />
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className='border-b border-gray-200 pb-3 mb-3'>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Internships
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Jobs
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Certification Courses
              <span className='px-2 py-0.5 bg-amber-400 text-white font-semibold rounded-lg text-xs'>OFFER</span>
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Placement Guarantee Courses
            </a>
          </div>

          {/* User Account Links */}
          <div className='pb-3'>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              My Applications
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              My Bookmarks
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Edit Resume
            </a>
            <a
              href="#"
              className='py-3 px-4 hover:bg-gray-100 rounded flex items-center justify-between'
              onClick={onClose}
            >
              Edit Preferences
            </a>
            <div className='flex justify-between py-3 px-4 hover:bg-gray-100 rounded items-center'>
              <p>More</p>
              <ChevronRight className='h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}