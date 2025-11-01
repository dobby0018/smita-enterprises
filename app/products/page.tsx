import ProductCarousel from '../../components/ProductCarousel';

export default function Products() {
  const productCategories = [
    {
      name: 'DEUTZ AG - FL 912 Series',
      description: 'High-performance cylinder liners with over 2.5 million units produced since inception',
      models: [
        { name: 'FL-912 (Shoulder length 136.8 Bore 100 mm)', partNo: '89 495 110' },
        { name: 'FL-912 (Shoulder length 137.2 Bore 100 mm)', partNo: '89 005 110' }
      ],
      images: [
        '/products/deutz-fl912/product-shot-1.jpg',
        '/products/deutz-fl912/technical-drawing.jpg',
        '/products/deutz-fl912/manufacturing-process.jpg',
        '/products/deutz-fl912/quality-check.jpg'
      ],
      stats: '2.5M+ Units Produced',
      features: ['High Wear Resistance', 'Precision Engineered', 'Quality Tested']
    },
    {
      name: 'DEUTZ AG - FL 413 Series',
      description: 'Heavy-duty cylinder liners for industrial applications',
      models: [
        { name: 'FL-413 (Head seat dia 154 mm bore 125 mm)', partNo: '89 384 110' },
        { name: 'FL-413 (Head seat dia 150 mm bore 125 mm)', partNo: '89 030 110' },
        { name: 'FL-413 (Head seat dia 145 mm bore 120 mm)', partNo: '88 562 110' }
      ],
      images: [
        '/products/deutz-fl413/product-shot-1.jpg',
        '/products/deutz-fl413/application-image.jpg',
        '/products/deutz-fl413/dimensions-drawing.jpg'
      ],
      features: ['Robust Construction', 'Thermal Stability', 'Long Service Life']
    },
    {
      name: 'DEUTZ AG - FL 913 Series',
      description: 'Advanced cylinder liners with multiple shoulder length variations',
      models: [
        { name: 'FL-913 (Shoulder length 137.2 Bore 102 mm)', partNo: '88 684 110' },
        { name: 'FL-913 (Shoulder length 136.8 Bore 102 mm)', partNo: '89 494 110' },
        { name: 'FL-913 C (Shoulder length 135.4 Bore 102 mm)', partNo: '89 341 110' },
        { name: 'FL-913 C (Shoulder length 134.9 Bore 102 mm)', partNo: '89 496 110' },
        { name: 'FL-913 G (Shoulder length 124.8 Bore 102 mm)', partNo: '89 410 110' }
      ],
      images: [
        '/products/deutz-fl913/product-shot-1.jpg',
        '/products/deutz-fl913/variants-comparison.jpg',
        '/products/deutz-fl913/installation-guide.jpg'
      ],
      features: ['Multiple Variants', 'High Precision', 'Optimal Heat Dissipation']
    },
    {
      name: 'VOLKSWAGEN Series',
      description: 'Premium cylinder liners for Volkswagen engines with various bore sizes',
      models: [
        { name: '19 Ribs bore 85.5mm', partNo: '88 451 110' },
        { name: '19 Ribs bore 83.0mm', partNo: '88 463 110' },
        { name: '19 Ribs bore 77.0mm', partNo: '88 459 110' },
        { name: '19 Ribs bore 87.0mm', partNo: '88 656 110' },
        { name: '19 Ribs bore 77.0mm', partNo: '88 447 110' },
        { name: '19 Ribs bore 85.5mm', partNo: '88 453 110' },
        { name: '22 Ribs bore 85.5mm', partNo: '88 452 110' }
      ],
      images: [
        '/products/volkswagen/product-shot-1.jpg',
        '/products/volkswagen/ribs-detail.jpg',
        '/products/volkswagen/bore-comparison.jpg',
        '/products/volkswagen/oe-quality.jpg'
      ],
      features: ['Multiple Rib Configurations', 'Various Bore Sizes', 'OE Quality']
    },
    {
      name: 'TATRA Series',
      description: 'Specialized cylinder liners for TATRA applications',
      models: [
        { name: 'Head seat dia 140 mm bore 120mm', partNo: '89 350 110' },
        { name: 'Head seat dia 145 mm bore 120mm', partNo: '89 539 110' }
      ],
      images: [
        '/products/tatra/product-shot-1.jpg',
        '/products/tatra/heavy-duty-app.jpg',
        '/products/tatra/special-design.jpg'
      ],
      features: ['Specialized Design', 'Heavy-Duty Application', 'Reliable Performance']
    },
    {
      name: 'Specialty Components',
      description: 'High-quality specialized components for industrial applications',
      models: [
        { name: '24% Chrome Castings', partNo: 'High Wear Resistance' },
        { name: 'Yamazaki Mazak Housing', partNo: 'Precision Housing' },
        { name: 'Yamazaki Mazak Turret', partNo: 'Turret Components' }
      ],
      images: [
        '/products/specialty/chrome-castings.jpg',
        '/products/specialty/mazak-housing.jpg',
        '/products/specialty/turret-components.jpg',
        '/products/specialty/casting-process.jpg'
      ],
      features: ['24% Chrome Content', 'High Wear Resistance', 'Precision Machined']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of high-quality cylinder liners and precision components. 
            Each product features multiple views - click through to see technical drawings, manufacturing processes, and applications.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">2.5M+</div>
              <div className="text-sm text-gray-600">FL 912 Units</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">Product Variants</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Quality Tested</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">ISO</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
          </div>
        </div>

        {/* Products Grid with Carousels */}
        <div className="space-y-12">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="lg:flex">
                {/* Product Carousel */}
                <div className="lg:w-2/5 p-6">
                  <ProductCarousel 
                    images={category.images} 
                    productName={category.name}
                  />
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-500">
                      Click arrows to view {category.images.length} images: Product shots, technical drawings & applications
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="lg:w-3/5 p-6 border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                    </div>
                    {category.stats && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {category.stats}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Models Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 font-medium">Model Specification</th>
                          <th className="px-4 py-3 font-medium">KS Part Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.models.map((model, modelIdx) => (
                          <tr key={modelIdx} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{model.name}</td>
                            <td className="px-4 py-3 font-mono text-blue-600">{model.partNo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Detailed Product Information?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get complete technical specifications, CAD drawings, and pricing for all our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Download Complete Catalog
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Request Technical Drawings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}