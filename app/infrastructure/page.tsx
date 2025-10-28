export default function Infrastructure() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Infrastructure</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Our manufacturing facility spans over 10,000 square meters and is equipped 
              with state-of-the-art machinery and technology.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>CNC Machining Centers</li>
              <li>Robotic Assembly Lines</li>
              <li>Quality Testing Laboratories</li>
              <li>Advanced Forging and Casting Units</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}