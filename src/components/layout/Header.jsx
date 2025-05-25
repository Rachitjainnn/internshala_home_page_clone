import { useState, useRef } from 'react';
import logo from '../../assets/logo.png';
import InternshipCard from '../hoverCard/InternshipCard';
import CourseCard from '../hoverCard/CourseCard';
import JobsCard from '../hoverCard/JobsCard';
import ProfileCard from '../hoverCard/ProfileCard';
import MobileHeader from './MobileHeader';
import { MessagesSquare, ChevronDown, ChevronUp, Menu, X, Star, ChevronRight } from 'lucide-react';

export default function Header() {
    const [activeCard, setActiveCard] = useState(null);
    const [cardHover, setCardHover] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const hoverTimeout = useRef(null);

    const handleMouseLeave = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }

        hoverTimeout.current = setTimeout(() => {
            if (!cardHover) {
                setActiveCard(null);
            }
        }, 300);
    }

    return (
        <div className='relative min-h-16 bg-white shadow-sm z-20'>
            <div className='flex items-center justify-between w-full lg:w-3/4 mx-auto h-16 px-4 lg:px-0'>
                {/* Mobile menu button and logo */}
                <div className='flex items-center'>
                    <button
                        className='lg:hidden mr-4'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <img src={logo} alt="Logo" className='h-8 w-36 mb-3' />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex mr-14 h-full'>
                    <nav className='flex space-x-4 items-center h-full'>
                        <div className="relative h-full flex px-2" onMouseLeave={handleMouseLeave}>
                            <a
                                href="#"
                                className='hover:text-blue-800 hover:bg-blue-100 hover:border-blue-300 hover:border-b-3 h-full flex items-center  text-sm px-4'
                                onMouseEnter={() => setActiveCard('internship')}
                            >
                                Internships
                                <span className='ml-1'>
                                    {activeCard === 'internship' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </a>
                            <a
                                href="#"
                                className='hover:text-blue-800 hover:bg-blue-100 hover:border-blue-300 hover:border-b-3 h-full flex items-center text-sm px-4'
                                onMouseEnter={() => setActiveCard('course')}
                            >
                                Courses
                                <span className='px-2 ml-1 py-0.5 bg-amber-400 text-white font-semibold rounded-lg'>OFFER</span>
                                <span className='ml-1'>
                                    {activeCard === 'course' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </a>
                            <a
                                href="#"
                                className='hover:text-blue-800 hover:bg-blue-100 hover:border-blue-300 hover:border-b-3 h-full flex items-center text-sm px-4'
                                onMouseEnter={() => setActiveCard('jobs')}
                            >
                                Jobs
                                <span className='ml-1'>
                                    {activeCard === 'jobs' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </a>
                            <a
                                href="#"
                                className='hover:text-blue-800 h-full flex items-center px-4'
                            >
                                <MessagesSquare size={20} />
                            </a>
                            <a
                                href="#"
                                className='hover:text-blue-800 hover:bg-blue-100 hover:border-blue-300 hover:border-b-3 h-full flex items-center px-4'
                                onMouseEnter={() => setActiveCard('profile')}
                            >
                                <img
                                    src="https://i.pravatar.cc/36"
                                    alt="User"
                                    className="w-7 h-7 rounded-full object-cover"
                                />
                                <span className='ml-1'>
                                    {activeCard === 'profile' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </a>

                            {/* Hover Cards */}
                            {activeCard === 'internship' && (
                                <InternshipCard setCardHover={setCardHover} setActiveCard={setActiveCard} />
                            )}
                            {activeCard === 'course' && (
                                <CourseCard setCardHover={setCardHover} setActiveCard={setActiveCard} />
                            )}
                            {activeCard === 'jobs' && (
                                <JobsCard setCardHover={setCardHover} setActiveCard={setActiveCard} />
                            )}
                            {activeCard === 'profile' && (
                                <ProfileCard setCardHover={setCardHover} setActiveCard={setActiveCard} />
                            )}
                        </div>
                    </nav>
                </div>

                {/* Mobile chat icon */}
                <div className='lg:hidden'>
                    <a href="#" className='hover:text-blue-800'>
                        <MessagesSquare size={20} />
                    </a>
                </div>

                {/* Mobile menu (shown when hamburger is clicked) */}
                {mobileMenuOpen && (
                    <MobileHeader onClose={() => setMobileMenuOpen(false)} />
                )}
            </div>
        </div>
    );
}
