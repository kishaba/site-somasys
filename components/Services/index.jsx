const Services = () => {
  return (
    <div className="text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma">
      <div className="container px-5 py-24 mx-auto flex flex-wrap ">

        <div className="container flex flex-wrap lg:py-6 px-5 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-4xl title-font font-medium mb-3">
                Gestão empresarial
              </h2>
              <p className="leading-relaxed text-base text-white">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-4xl title-font font-medium mb-3">
                Soluções Comerciais
              </h2>
              <p className="leading-relaxed text-base text-white">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-4xl title-font font-medium mb-3">
                Serviços Oferecidos
              </h2>
              <p className="leading-relaxed text-base text-white">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>

        </div>

        <div className="lg:max-w-lg mx-auto lg:w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            className="object-contain object-center"
            alt="feature"
            src="ideia.png"
          />
        </div>
      </div>
    </div>

  )
}

export default Services;