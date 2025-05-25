import { Funnel } from 'lucide-react';
import { useState } from 'react';
import CheckBox from '../common/CheckBox';
import InputBox from '../common/InputBox';
import SalarySlider from '../filter/SalarySlider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FilterBox({profileValue, setProfileValue, locationValue, setLocationValue, maxDuration, setMaxDuration, workFromHomeChecked, setWorkFromHomeChecked, internationalWork, setInternationalWork}) {
    const [preferencesChecked, setPreferencesChecked] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [jobOffered, setJobOffered] = useState(false);
    const [fastResponse, setFastResponse] = useState(false);
    const [earlyApplicant, setEarlyApplicant] = useState(false);
    const [forWomen, setForWomen] = useState(false);
    const [startDate, setStartDate] = useState(null);

    const clearFilters = () => {
        setPreferencesChecked(false);
        setWorkFromHomeChecked(false);
        setInternationalWork(false);
        setShowMore(false);
        setJobOffered(false);
        setFastResponse(false);
        setEarlyApplicant(false);
        setForWomen(false);
        setProfileValue([]);
        setLocationValue([]);
        setMaxDuration([]);
        setStartDate(null);
    };

    return (
        <div className={`bg-white overflow-y-auto w-full mx-auto p-6 rounded-lg ${showMore ? 'h-[90vh]' : 'h-[80vh]'}`}>

            <div className='flex items-center justify-center gap-2 mb-2'>
                <Funnel className="w-4 h-4 text-blue-500" />
                <p className='text-lg'>Filters</p>
            </div>

            <div className='flex items-center justify-start gap-2'>
                <CheckBox
                    checked={preferencesChecked}
                    onChange={(e) => setPreferencesChecked(e.target.checked)}
                />
                <p>As per my <span className='text-blue-500'>preferences</span></p>
            </div>

            <div className='flex flex-col gap-2 items-start justify-start mt-2'>
                <p>Profile</p>
                <InputBox
                    value={profileValue}
                    setValue={setProfileValue}
                    placeholder={'eg. Data Science'}
                    options={['Data Science Intern', 'Administration Intern', 'Business Analytics Intern', 'Brand Management Intern', 'Android App Development Intern', 'Product Management Intern']} />
            </div>

            <div className='flex flex-col gap-2 items-start justify-start mt-2'>
                <p>Location</p>
                <InputBox
                    value={locationValue}
                    setValue={setLocationValue}
                    placeholder={'eg. Dilli'}
                    options={['Gurgaon', 'Delhi', 'Lucknow', 'Tarn Taran', 'Munnar', 'Parbhani', 'Kera', 'Lucknow']} />
            </div>

            <div className='flex items-center justify-start gap-2 mt-4'>
                <CheckBox
                    checked={workFromHomeChecked}
                    onChange={(e) => setWorkFromHomeChecked(e.target.checked)}
                />
                <p>Work from Home</p>
            </div>

            <div className='flex items-center justify-start gap-2 mt-4'>
                <CheckBox
                    checked={internationalWork}
                    onChange={(e) => setInternationalWork(e.target.checked)}
                />
                <p>International Internships</p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2 mt-1'>
                <SalarySlider />
            </div>

            <div
                className='flex gap-2 items-center'
                onClick={() => setShowMore(!showMore)}
            >
                <p className='text-blue-500 font-semibold'>{showMore ? ' View less filters ' : 'View more filters'}</p>
                {showMore ? <ChevronUp className='text-blue-500 font-semibold' size={16} /> : <ChevronDown className='text-blue-500 font-semibold' size={16} />}
            </div>
            

            {showMore && (
                <div>

                    <div className='flex flex-col gap-2 items-start justify-start mt-6 mb-2 w-full'>
                        <p>Starting from (or after)</p>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Choose a date"
                            className='p-2 border border-gray-300 rounded-sm focus-within:border-blue-500 w-80'
                        />
                    </div>

                    <div className='flex flex-col gap-2 items-start justify-start mt-2 mb-4'>
                        <p>Max.duration (months)</p>
                        <InputBox
                            value={maxDuration}
                            setValue={setMaxDuration}
                            placeholder={'Choose duration'}
                            options={['1 Month', '2 Month', '3 Month', '4 Month', '5 Month', '6 Month']} />
                    </div>

                    <div className='flex items-center justify-start gap-2 mb-2'>
                        <CheckBox
                            checked={jobOffered}
                            onChange={(e) => setJobOffered(e.target.checked)}
                        />
                        <p>Internships with job offer</p>
                    </div>

                    <div className='flex items-center justify-start gap-2 mb-2'>
                        <CheckBox
                            checked={fastResponse}
                            onChange={(e) => setFastResponse(e.target.checked)}
                        />
                        <p>Fast response</p>
                    </div>

                    <div className='flex items-center justify-start gap-2 mb-2'>
                        <CheckBox
                            checked={earlyApplicant}
                            onChange={(e) => setEarlyApplicant(e.target.checked)}
                        />
                        <p>Early applicant</p>
                    </div>

                    <div className='flex items-center justify-start gap-2'>
                        <CheckBox
                            checked={forWomen}
                            onChange={(e) => setForWomen(e.target.checked)}
                        />
                        <p>Internships for women</p>
                    </div>

                </div>

            )}

            <div
                onClick={clearFilters}
                className='flex items-end justify-end mt-2 w-full cursor-pointer'>
                <p className='text-blue-500'>Clear All</p>
            </div>

        </div>

    )
}
