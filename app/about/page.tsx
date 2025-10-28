export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded with a vision to revolutionize auto parts manufacturing, 
              Smita Enterprises combines traditional craftsmanship with modern technology.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in building lasting relationships with our customers 
              through quality products and exceptional service.
            </p>
          </div>
          
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            {/* Company Image */}
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>
      </div>
    </div>
  );
}