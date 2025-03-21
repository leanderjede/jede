import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/5-1.webp'}
                alt="bodenfliesen"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für das Verlegen von Bodenfliesen umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside space-y-2">
    <li><strong>Materialauswahl und Beratung:</strong> Wir helfen Ihnen, die richtigen Bodenfliesen für Ihre Anforderungen auszuwählen, sei es für Wohn- oder Geschäftsräume.</li>
    <li><strong>Fachgerechte Verlegung:</strong> Unser erfahrenes Team verlegt die Fliesen präzise und sorgt für eine gleichmäßige, langlebige Oberfläche.</li>
    <li><strong>Sanierung und Reparatur:</strong> Wir übernehmen auch die Sanierung beschädigter Fliesenböden und sorgen für ein makelloses Erscheinungsbild.</li>
    <li><strong>Versiegelung und Pflege:</strong> Schutzversiegelungen für erhöhte Widerstandsfähigkeit und einfache Pflege.</li>
    <li><strong>Dekorative Gestaltung:</strong> Individuelle Verlegemuster und Designlösungen für eine einzigartige Optik.</li>
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
            Wir beraten Sie umfassend bei der Auswahl der passenden Bodenfliesen. Dabei berücksichtigen wir Design, Funktionalität und Raumnutzung.
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
            Unsere Experten verlegen Bodenfliesen mit Präzision und Sorgfalt, um ein gleichmäßiges und ästhetisches Ergebnis zu gewährleisten.
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
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-red-600">
            Beratung und Planung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beraten Sie umfassend bei der Auswahl der passenden Bodenfliesen. Dabei berücksichtigen wir Design, Funktionalität und Raumnutzung.
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
  
</div>

        </>
    );
}

export default Page;
