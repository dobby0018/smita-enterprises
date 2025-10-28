export default function Careers() {
  const jobOpenings = [
    { title: 'Production Engineer', department: 'Manufacturing' },
    { title: 'Quality Inspector', department: 'Quality Assurance' },
    { title: 'Sales Executive', department: 'Sales' },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Careers</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 text-center">
            Join our team and be a part of a growing company that values innovation and quality.
          </p>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">Department: {job.department}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}