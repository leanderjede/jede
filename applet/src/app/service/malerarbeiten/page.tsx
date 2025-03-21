import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/3-1.webp'}
                alt="painting services"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere professionellen Malerarbeiten umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside space-y-2">
    <li><strong>Innenanstrich:</strong> Verschönern Sie Ihre Innenräume mit hochwertigen, präzisen Malerarbeiten.</li>
    <li><strong>Außenanstrich:</strong> Schützen und verschönern Sie die Außenfassade Ihres Gebäudes mit wetterbeständiger, langlebiger Farbe.</li>
    <li><strong>Wandvorbereitung:</strong> Sorgfältige Vorbereitung der Oberfläche für eine glatte und langlebige Haftung der Farbe.</li>
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
            Beratung und Planung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir bieten eine umfassende Beratung und Planung, um Ihre Wünsche genau zu verstehen und die optimale Vorgehensweise zu entwickeln. Unsere Experten unterstützen Sie bei der Auswahl geeigneter Farben und Techniken.
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
            src="/service-img/3-1.webp"
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
            Fachmännische Durchführung:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unser erfahrenes Team führt die Arbeiten fachmännisch, präzise und mit hochwertigen Materialien durch. Wir sorgen für eine saubere, gleichmäßige und langlebige Ausführung.
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
            src="/service-img/3-2.jpg"
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
            Fertigstellung und Abnahme:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Nach Abschluss der Arbeiten führen wir eine gründliche Inspektion durch, um sicherzustellen, dass das Ergebnis Ihren Erwartungen entspricht. Wir hinterlassen die Räumlichkeiten sauber und bereit zur Nutzung.
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
            src="/service-img/3-3.jpg"
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
