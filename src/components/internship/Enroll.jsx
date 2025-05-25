import { Zap, Clock, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EnrollCard() {

    const [timeLeft, setTimeLeft] = useState(240 * 60 * 60); // 240 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}h ${mins}m ${secs}s`;
    };



    return (
        <div className="bg-white w-full shadow-sm hover:shadow-lg p-4 rounded-lg my-4 h-auto lg:h-[28vh] flex flex-col items-start justify-start">

            {/* Title and Offer */}
            <div className="flex flex-col items-start justify-start sm:flex-row sm:items-start sm:justify-start w-full gap-2">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">Get Internship and Job Preparation training FREE!</p>
                <p className="hidden sm:block text-white bg-amber-400 px-3 py-0.5 rounded-l-xl w-fit text-sm text-center">OFFER</p>
            </div>

            {/* Discount Info */}
            <p className="text-gray-500 mt-2 text-sm sm:text-base">By enrolling in trainings at FLAT 55%+10% OFF!</p>

            {/* Coupon and Timer */}
            <div className="flex flex-col sm:flex-row sm:gap-10 gap-2 my-4">

                <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    <p className="text-xs font-light">Use Coupon:</p>
                    <p className="text-xs font-semibold text-gray-800">DEGREE10</p>
                </div>

                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <p className="text-xs font-light">Offer ends in:</p>
                    <p className="text-xs text-gray-800">{formatTime(timeLeft)}</p>
                </div>

            </div>

            {/* Description */}
            <p className="text-gray-800 font-light text-[12px] sm:text-sm  mb-2">Choose from Web Dev, Machine Learning, Python & more</p>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="hidden sm:block text-gray-800 text-sm bg-gray-100 py-1 px-4 rounded-xl w-fit">Government Certified Trainings</p>
                <div className="flex items-center gap-2 cursor-pointer">
                    <p className="text-blue-500 text-sm">Enroll now</p>
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                </div>
            </div>

        </div>
    );
}
