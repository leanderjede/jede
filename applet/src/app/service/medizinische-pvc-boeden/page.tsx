import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/4-4.jpg'}
                alt="painting services"
                fill={true}
                quality={100}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für das Verlegen von medizinischen PVC-Böden umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside space-y-2">
    <li><strong>Auswahl des geeigneten PVC-Bodens:</strong> Wir helfen Ihnen, den passenden medizinischen PVC-Boden auszuwählen, der den Anforderungen Ihrer Einrichtung entspricht.</li>
    <li><strong>Fachgerechte Verlegung:</strong> Unser erfahrenes Team verlegt den medizinischen PVC-Boden präzise, sauber und gemäß den geltenden Hygiene- und Sicherheitsstandards.</li>
    <li><strong>Versiegelung und Schutz:</strong> Wir versiegeln den Boden für eine lange Haltbarkeit und einfache Reinigung, ideal für medizinische Einrichtungen.</li>
    <li><strong>Spezialbeschichtungen:</strong> Anwendung spezieller Beschichtungen für Feuchtigkeitsresistenz, Schimmelschutz oder ästhetischen Mehrwert.</li>
    <li><strong>Dekorative Maltechniken:</strong> Individuelle dekorative Techniken wie Akzentwände, Muster und Texturen für eine persönliche Note.</li>
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
            Beratung und Materialwahl:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beraten Sie umfassend, um den richtigen medizinischen PVC-Boden für Ihre Anforderungen zu finden. Dabei berücksichtigen wir Hygienevorgaben, Belastbarkeit und Design.
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
            style={{ color: "transparent" }}
            src="/service-img/4-1.jpg"
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
            Fachmännische Verlegung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unser spezialisiertes Team verlegt den PVC-Boden präzise, effizient und gemäß den strengen Standards für medizinische Einrichtungen.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            alt="Malerarbeiten"
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/service-img/4-2.jpg"
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
            Abnahme und Qualitätskontrolle:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Nach der Verlegung überprüfen wir den Boden gründlich, um höchste Qualität zu gewährleisten. Wir sorgen dafür, dass der Raum sauber, sicher und sofort einsatzbereit ist.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            alt="Malerarbeiten"
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/service-img/4-3.jpg"
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
