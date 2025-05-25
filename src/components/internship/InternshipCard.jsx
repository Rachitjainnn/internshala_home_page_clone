import { MapPin, Calendar, Banknote, IndianRupee, Clock, Briefcase, Building2 } from 'lucide-react';

export default function InternshipCard({ internship }) {
    return (
        <div className="bg-white w-full shadow-sm hover:shadow-lg p-3 rounded-lg my-4 h-auto flex flex-col items-start justify-start">

            <div className='flex items-center justify-between w-full'>
                <p className="font-semibold text-gray-800 text-sm sm:text-base"> {internship.profile_name || 'No Title'} </p>
                <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 bg-blue-200 px-2 py-1 rounded-sm" />

            </div>

            <p className="text-gray-500 text-sm mb-1">{internship.company_name || 'Unknown Company'}</p>
      
            <div className="flex flex-wrap gap-3 sm:gap-10 my-1 sm:my-4">

                <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    <p className="text-[10px] sm:text-xs font-light">
                        {internship.location_names.join(', ') || 'Work From Home'}
                    </p>
                </div>

                <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <p className="text-[10px] sm:text-xs font-light">{internship.duration}</p>
                </div>

                <div className="flex items-center gap-1">
                    <Banknote className="h-3 w-3 sm:h-4 sm:w-4" />
                    <p className="text-[10px] sm:text-xs font-light">
                        {internship.stipend.salary || 'Unpaid'}
                    </p>
                </div>

            </div>




            <div className="flex gap-4 sm:gap-5 my-2">

                <div className="flex items-center gap-1 text-blue-500 bg-blue-200 py-0.5 px-2 text-xs sm:text-sm rounded-2xl">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <p className="text-[10px] sm:text-sm">{internship.posted_by_label}</p>
                </div>

                {internship.id === 65381 && (
                    <div className="flex items-center gap-1 py-0.5 px-2 bg-amber-200 text-xs sm:text-sm rounded-2xl text-amber-500">
                        <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                        <p className="text-[10px] sm:text-sm">Job offer starting 3 LPA post internship</p>
                    </div>
                )}

            </div>

        </div>
    )
}
