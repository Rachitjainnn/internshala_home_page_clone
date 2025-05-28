import InternshipCard from './InternshipCard';

export default function InternshipList({ filteredInternships, loading, error }) {

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
