import { useEffect, useState } from 'react';

export default function useFilteredInternships({
  profileValue,
  locationValue,
  maxDuration,
  workFromHomeChecked,
  internationalWork,
  stipendValue
}) {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/internships`);
        if (!res.ok) throw new Error('Failed to fetch internships');
        const data = await res.json();
        setInternships(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const filteredInternships = internships.filter(intern => {
    const titleMatch = !profileValue?.length || profileValue.some(val => intern?.title?.includes(val));
    const locationMatch = !locationValue?.length || locationValue.some(loc => intern?.location_names?.includes(loc));
    const durationMatch = !maxDuration?.length || maxDuration.some(d => intern?.duration.includes(d));
    const wfhMatch = !workFromHomeChecked || intern?.work_from_home === true;
    const internationalMatch = !internationalWork || intern?.is_international_job === true;
    const stipendMatch = !stipendValue?.length || intern?.stipend?.salaryValue1 >= stipendValue[0];

    return titleMatch && locationMatch && durationMatch && wfhMatch && internationalMatch && stipendMatch;
  });

  return { filteredInternships, loading, error };
}
