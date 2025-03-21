import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/7-1.jpg'}
                alt="Laminat- und Vinylboden verlegen"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für das Verlegen von Laminat- und Vinylböden umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Beratung und Planung:</strong> Wir analysieren Ihre Räumlichkeiten und beraten Sie umfassend zur Auswahl des passenden Laminat- oder Vinylbodens.</li>
                <li><strong>Fachgerechte Verlegung:</strong> Unser Team verlegt Laminat- und Vinylböden präzise und sorgt für eine stabile, langlebige und ästhetische Oberfläche.</li>
                <li><strong>Sanierung und Reparatur:</strong> Wir reparieren beschädigte Laminat- und Vinylböden und sorgen für eine gleichmäßige und glatte Oberfläche.</li>
                <li><strong>Versiegelung und Schutz:</strong> Wir bieten passende Versiegelungen, um Ihre Böden vor Feuchtigkeit, Abnutzung und Verschmutzung zu schützen.</li>
                <li><strong>Individuelle Anpassung:</strong> Ob klassisches Laminat, moderner Vinylboden oder Designböden – wir passen den Bodenbelag individuell Ihren Anforderungen an.</li>
            </ul>
              <button className="px-5 py-5 bg-red-900">JETZT KONTAKTIEREN</button>
            {/* Google Rating */}
            <div className="mt-6 text-left">
              <p className="text-lg">
                <span className="text-[#ff9900] font-bold">5,0 ★★★★★</span> 
                <span className="ml-2">29+ Google-Bewertungen</span>
              </p>
            </div>
          </div>
              </div>  

              {/* sections */}
          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 mt-10 mb-10">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-red-600">
            Beratung und Planung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beraten Sie umfassend bei der Auswahl des richtigen Laminat- oder Vinylbodens und erstellen einen detaillierten Verlegeplan für Ihr Projekt.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/service-img/5-1.webp"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-red-600">
            Fachgerechte Verlegung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Experten verlegen Laminat- und Vinylböden präzise und sorgen für eine langlebige, stabile und ästhetische Oberfläche. Wir achten dabei auf höchste Qualität und Detailgenauigkeit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/service-img/5-3.jpg"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-red-600">
            Beratung und Planung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beraten Sie umfassend bei der Auswahl des richtigen Laminat- oder Vinylbodens und erstellen einen detaillierten Verlegeplan für Ihr Projekt.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/service-img/5-2.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}

export default Page;