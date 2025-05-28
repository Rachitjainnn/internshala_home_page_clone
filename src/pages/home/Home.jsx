import { useState } from 'react';
import { Filter } from 'lucide-react';
import FilterBox from '../../components/filter/FilterBox';
import EnrollCard from '../../components/internship/Enroll';
import InternshipList from '../../components/internship/InternshipList';
import useFilteredInternships from '../../utils/useFilteredInternships';
import { SliderContext } from '../../utils/sliderContext';

export default function Home() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [profileValue, setProfileValue] = useState([]);
  const [locationValue, setLocationValue] = useState([]);
  const [maxDuration, setMaxDuration] = useState([]);
  const [workFromHomeChecked, setWorkFromHomeChecked] = useState(false);
  const [internationalWork, setInternationalWork] = useState(false);
  const [stipendValue, setStipendValue] = useState([0]);

  const { filteredInternships, loading, error } = useFilteredInternships({
  profileValue,
  locationValue,
  maxDuration,
  workFromHomeChecked,
  internationalWork,
  stipendValue
});

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mt-8">
        <h1 className="text-xl font-semibold mb-2">{filteredInternships.length} Total Internships</h1>
        <p className="text-gray-600 mb-4">Latest Summer Internships in India</p>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-center mb-4">
        <button
          className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full shadow"
          onClick={() => setShowMobileFilter(true)}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-6">

        {/* Desktop Filter */}
        <div className="hidden lg:block w-1/5 mt-4">
          <div className="sticky top-4">
            <SliderContext.Provider value={{ stipendValue, setStipendValue }}>
            <FilterBox
              profileValue={profileValue}
              setProfileValue={setProfileValue}
              locationValue={locationValue}
              setLocationValue={setLocationValue}
              maxDuration={maxDuration}
              setMaxDuration={setMaxDuration}
              workFromHomeChecked={workFromHomeChecked}
              setWorkFromHomeChecked={setWorkFromHomeChecked}
              internationalWork={internationalWork}
              setInternationalWork={setInternationalWork}
            />
            </SliderContext.Provider> 

          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col w-full lg:w-2xl text-center">
          <EnrollCard />
          <InternshipList
            filteredInternships={filteredInternships}
            loading={loading}
            error={error}
          />

        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 w-full h-full bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white w-full h-full max-w-md p-4 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowMobileFilter(false)}
              className="absolute top-2 right-2 text-gray-600 text-sm"
            >
              ✕
            </button>
            <SliderContext.Provider value={{ stipendValue, setStipendValue }}>
            <FilterBox
              profileValue={profileValue}
              setProfileValue={setProfileValue}
              locationValue={locationValue}
              setLocationValue={setLocationValue}
              maxDuration={maxDuration}
              setMaxDuration={setMaxDuration}
              workFromHomeChecked={workFromHomeChecked}
              setWorkFromHomeChecked={setWorkFromHomeChecked}
              internationalWork={internationalWork}
              setInternationalWork={setInternationalWork}
            />
             </SliderContext.Provider> 
            
          </div>
        </div>
      )}
    </div>
  );
}
