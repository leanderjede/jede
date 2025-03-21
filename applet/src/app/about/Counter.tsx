"use client";

const Counter = () => {
 

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Unsere Erfahrung

              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              Mit jahrelanger Erfahrung in verschiedenen Bausektoren haben wir unsere Fähigkeiten verfeinert, um zuverlässige und effiziente Dienstleistungen anzubieten. Von der ersten Beratung bis zum Abschluss des Projekts ist unser Team der Exzellenz verpflichtet und stellt sicher, dass jedes Detail höchsten Ansprüchen gerecht wird.






              </p>
            </div>
            {/* Counter Display */}
          
          </div>
          {/* Right Section - Image */}
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;
