import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/1.png'}
                alt="construction wensite"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Our Drywall and Plastering Services Include:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside space-y-2">
    <li><strong>New Wall Installation:</strong> Create partitions and customize your space with durable, expertly installed drywall.</li>
    <li><strong>Wall Repairs:</strong> Fix cracks, holes, and other damages to restore the structural integrity and appearance of your walls.</li>
    <li><strong>Excellent insulation values:</strong> Reduces heating costs and increases living comfort.</li>
    <li><strong>Plastering for Smooth Finishes:</strong> Achieve seamless, smooth surfaces that are ready for painting or other decorative finishes.</li>
    <li><strong>Acoustic Drywall:</strong> Reduce noise levels for quieter, more comfortable environments—ideal for offices, studios, and living spaces.</li>
  </ul>
              <button className="px-5 py-5 bg-red-900" >SET NOW CONTACT</button>
            {/* Google Rating */}
            <div className="mt-6 text-left">
              <p className="text-lg">
                <span className="text-[#ff9900] font-bold">5.0 ★★★★★</span> 
                <span className="ml-2">29+ Google reviews</span>
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
          <div>
          
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-red-600">
            Beratung und Planung:

            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beginnen mit einer ausführlichen Beratung, um Ihre spezifischen Anforderungen und Wünsche zu verstehen. Unsere Experten analysieren den Raum und besprechen die besten Lösungen für die Installation von Trockenbauwänden, Putzarbeiten oder Reparaturen.


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
            src="/service-img/1.png"
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
            Professionelle Ausführung:

            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unser erfahrenes Team führt die Arbeiten mit hochwertigen Materialien präzise und fachgerecht aus. Ob es um das Erstellen neuer Trennwände, die Reparatur von Schäden oder das Verputzen für eine glatte Oberfläche geht – wir sorgen für langlebige Ergebnisse.


            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            alt="Inbox user interface"
            loading="lazy"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            style={{ color: "transparent" }}
            src="/service-img/2.jpg"
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
            Nach Abschluss der Arbeiten führen wir eine gründliche Inspektion durch, um ein makelloses Ergebnis zu gewährleisten. Wir bereiten die Oberflächen für das Streichen oder weitere Dekorationen vor und sorgen für ein sauberes und ästhetisches Finish.


            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={646}
            height={485}
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            style={{ color: "transparent" }}
            src="/service-img/3.jpg"
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
