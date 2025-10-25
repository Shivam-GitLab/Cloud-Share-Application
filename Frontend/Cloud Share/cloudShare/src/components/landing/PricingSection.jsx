const PricingSection = ({ pricingPlans , openSignUp }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="mt-16 grid space-y-12 lg:space-y-0 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-200
          ${plan.highlighted ? 'border-2 border-purple-500 transform scale-105 z-10' : 'border border-gray-200'}
          hover:border-2 hover:border-purple-500 hover:scale-105 hover:z-10`}
            >
              <div className={`p-6 py-8 ${plan.highlighted ? 'bg-gradient-to-br from-purple-50 to-white' : 'bg-white'}`}>
                <h3 className="text-2xl font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">{plan.price}</p>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature, featuresIndex) => (
                    <li key={featuresIndex}>• {feature}</li>
                  ))}
                </ul>
                <button
                onClick={() => openSignUp()}
                  className={`mt-8 px-4 py-2 rounded font-medium ${plan.highlighted
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );

}

export default PricingSection;