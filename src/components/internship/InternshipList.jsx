import { useEffect, useState } from 'react';
import InternshipCard from './InternshipCard';

export default function InternshipList({ profileValue, locationValue, maxDuration, workFromHomeChecked , internationalWork }) {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/internships`);
                if (!response.ok) {
                    throw new Error('Failed to fetch internships');
                }
                const data = await response.json();
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
        const titleMatch = !profileValue || profileValue.length === 0
            ? true
            : profileValue.some(value => intern?.title?.includes(value));

        const locationMatch = !locationValue || locationValue.length === 0
            ? true
            : locationValue.some(loc => intern?.location_names?.includes(loc));

        const durationMatch = !maxDuration || maxDuration.length === 0
            ? true
            : maxDuration.some(duration => intern?.duration.includes(duration));

        const wfhMatch = !workFromHomeChecked
            ? true
            : intern?.work_from_home === true;

        const internationalMatch = !internationalWork
            ? true
            : intern?.is_international_job === true;

        return titleMatch && locationMatch && durationMatch && wfhMatch && internationalMatch;
    });


    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div>
            {filteredInternships.length > 0 ? (
                filteredInternships.map((item) => (
                    <InternshipCard key={item.id} internship={item} />
                ))
            ) : (
                <p className="text-center mt-4">No internships match your search criteria</p>
            )}
        </div>
    );
}
