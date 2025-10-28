
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Carousel />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Assurance', desc: 'ISO Certified Manufacturing' },
              { title: 'Wide Product Range', desc: 'Comprehensive Auto Parts' },
              { title: 'Global Reach', desc: 'Exporting Worldwide' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about-us" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Smita Enterprises</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              With years of experience in auto parts manufacturing, Smita Enterprises 
              delivers quality and reliability to customers worldwide.
            </p>
            <p className="text-gray-700">
              Our state-of-the-art infrastructure and skilled workforce ensure 
              premium quality products that meet international standards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}