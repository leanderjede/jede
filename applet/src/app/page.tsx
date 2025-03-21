'use client'

import GoogleReviews from "./component/Ui/Review";
import PartnerSlider from "./component/Ui/PartnerSwiper";
import Image from "next/image";

const services = [
  {
    title: "Kostenlose Erstberatung und Besichtigung vor Ort",
    link: "/services/erstberatung",
    description: "Wir bieten Ihnen eine kostenlose Erstberatung und Besichtigung vor Ort, um Ihre Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln."
  },
  {
    title: "Trockenbau- und Putzarbeiten",
    link: "/services/trockenbau-putzarbeiten",
    description: "Professionelle Trockenbau- und Putzarbeiten zur Gestaltung und Renovierung Ihrer Räume mit hochwertigen Materialien."
  },
  {
    title: "Malerarbeiten",
    link: "/services/malerarbeiten",
    description: "Fachgerechte Malerarbeiten für Innen- und Außenbereiche, die Ihrem Raum neues Leben verleihen."
  },
  {
    title: "Verlegen von medizinischen PVC-Böden",
    link: "/services/medizinische-pvc-boeden",
    description: "Spezialisierte Verlegung von medizinischen PVC-Böden für sterile und hygienische Umgebungen."
  },
  {
    title: "Verlegen von Bodenfliesen",
    link: "/services/bodenfliesen",
    description: "Präzises Verlegen von Bodenfliesen für eine langlebige und ästhetische Bodenlösung."
  },
  {
    title: "Gießen von Estrichböden sowie Ausgleichsmasse",
    link: "/services/estrichboeden-ausgleichsmasse",
    description: "Fachgerechtes Gießen von Estrichböden und Ausgleichsmasse für ebene und belastbare Untergründe."
  },
  {
    title: "Verlegen von Holzböden (Dielen, Parkett)",
    link: "/services/holzboden-verlegen",
    description: "Verlegung hochwertiger Holzböden wie Dielen und Parkett für ein edles Ambiente."
  },
  {
    title: "Verlegen von Laminat- und Vinylböden",
    link: "/services/laminat-vinylboden",
    description: "Robuste Laminat- und Vinylböden für eine strapazierfähige und pflegeleichte Lösung."
  },
  {
    title: "Verlegen von PVC-Böden",
    link: "/services/pvc-boeden",
    description: "Kostengünstige und praktische PVC-Böden für verschiedene Anwendungsbereiche."
  },
  {
    title: "Mauerwerkstrockenlegung",
    link: "/services/mauerwerkstrockenlegung",
    description: "Effiziente Trockenlegung von feuchtem Mauerwerk zur Vermeidung von Feuchtigkeitsschäden."
  },
  {
    title: "Deckenbalkensanierung",
    link: "/services/deckenbalkensanierung",
    description: "Sanierung und Instandsetzung beschädigter Deckenbalken für stabile und sichere Strukturen."
  },
  {
    title: "Bekämpfung von Pilz- und Schädlingsbefall",
    link: "/services/pilz-schaedlingsbekaempfung",
    description: "Spezialisierte Bekämpfung von Pilz- und Schädlingsbefall zur Erhaltung der Bausubstanz."
  },
  {
    title: "Einbau von Fenster- und Türenelementen",
    link: "/services/fenster-tueren-einbau",
    description: "Montage hochwertiger Fenster- und Türenelemente für optimale Isolation und Sicherheit."
  },
  {
    title: "Einbau von Dachfenstern",
    link: "/services/dachfenster-einbau",
    description: "Installation moderner Dachfenster für verbesserten Lichteinfall und Belüftung."
  },
  {
    title: "Wechsel von Fensterglas",
    link: "/services/fensterglas-wechsel",
    description: "Schneller und präziser Austausch von Fensterglas bei Beschädigung oder zur Energieeinsparung."
  },
  {
    title: "Aufbereitung von Kastendoppelfenstern",
    link: "/services/kastendoppelfenster-aufbereitung",
    description: "Renovierung und Aufbereitung von Kastendoppelfenstern zur Erhaltung des historischen Charakters."
  },
  {
    title: "Einfräsen von Fenster-Dichtungen",
    link: "/services/fenster-dichtungen-einfraesen",
    description: "Nachträgliches Einfräsen von Fenster-Dichtungen zur Verbesserung der Wärmedämmung."
  },
  {
    title: "Montage von Markisen und Rollladen",
    link: "/services/markisen-rollladen-montage",
    description: "Montage von Markisen und Rollläden für Sonnenschutz und Sichtschutz."
  },
  {
    title: "Aufbereitung von Holzböden",
    link: "/services/holzboden-aufbereitung",
    description: "Professionelle Aufbereitung von Holzböden zur Verlängerung der Lebensdauer und Erneuerung des Erscheinungsbildes."
  },
  {
    title: "Terrassenbau",
    link: "/services/terrassenbau",
    description: "Individueller Terrassenbau für Ihren Garten oder Außenbereich."
  },
  {
    title: "Pflasterarbeiten / Garten- und Landschaftsbau",
    link: "/services/pflasterarbeiten-gartenbau",
    description: "Professionelle Pflasterarbeiten und Gestaltung im Garten- und Landschaftsbau."
  },
  {
    title: "Terrassenüberdachungen",
    link: "/services/terrassenueberdachungen",
    description: "Montage robuster Terrassenüberdachungen für Wetterschutz und Komfort."
  },
  {
    title: "Montage von Carports",
    link: "/services/carports-montage",
    description: "Montage von Carports für den Schutz Ihrer Fahrzeuge vor Witterungseinflüssen."
  },
  {
    title: "Dachabdichtungen sowie Entwässerung",
    link: "/services/dachabdichtungen-entwaesserung",
    description: "Dachabdichtungen und Entwässerungssysteme zum Schutz vor Feuchtigkeitsschäden."
  },
  {
    title: "Montage von Solaranlagen",
    link: "/services/solaranlagen-montage",
    description: "Installation von Solaranlagen zur Nutzung erneuerbarer Energien."
  },
  {
    title: "Energetische Sanierung",
    link: "/services/energetische-sanierung",
    description: "Energetische Sanierung für eine nachhaltige Reduzierung des Energieverbrauchs."
  },
  {
    title: "Baubetreuung",
    link: "/services/baubetreuung",
    description: "Umfassende Baubetreuung für eine reibungslose Abwicklung Ihres Bauvorhabens."
  }
];


export default function Home() {
  return (
    <>
 <div className="relative w-full h-screen">
      {/* Background Video */}
     <Image
      src={'/bgimg.webp'}
      alt="construction wensite"
      width={1000}
      height={1000}
      className="w-full h-screen object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
  {/* Header */}
  <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
    Willkommen bei Appelt-Bauservice
  </h1>

  {/* Paragraph */}
  <p className="mt-4 text-sm md:text-lg text-left max-w-2xl leading-relaxed">
    At Appelt construction service, we are committed to sustainable timber construction, painting, and solid wood construction (CLT). These methods combine energy efficiency, stability, and environmental awareness – ideal for modern, healthy living and workspaces.
    <br /><br />
    ✔ <strong>CO₂ neutral building</strong> – Wood stores CO₂ and reduces emissions.
    <br />
    ✔ <strong>Excellent insulation values</strong> – Reduces heating costs and increases living comfort.
    <br />
    ✔ <strong>Short construction times</strong> – Efficiently implemented thanks to precise prefabrication.
    <br /><br />
    Let us help you sustainably realize your vision!
  </p>
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
    {/* second section */}
    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
      Transparenz

        <span className="underline decoration-red-500">Components</span>
      </h1>
      <p className="mt-4 text-gray-500 xl:mt-6 ">
      Vertrauen entsteht durch Offenheit – deshalb ist Transparenz ein zentraler Bestandteil unserer Arbeit. Von der ersten Beratung bis zur Fertigstellung legen wir Wert auf klare Kommunikation, detaillierte Kostenübersicht und nachvollziehbare Prozesse. Sie wissen jederzeit, woran Sie bei uns sind. Unsere Projekte sind durchgängig überprüfbar, sodass Sie sich auf Qualität, Fairness und Verlässlichkeit verlassen können.
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="p-8 space-y-3 border-2 border-red-400  rounded-xl">
          <span className="inline-block text-red-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
          Effizienz
          </h1>
          <p className="text-gray-500 ">
          Wir sind eine innovative Zimmerei, die Design, Nachhaltigkeit und modernste Fertigungstechnologien vereint. Durch den gezielten Einsatz hochwertiger Materialien und effizienter Produktionsmethoden optimieren wir Zeit und Ergebnisse. Mit präzisen Maschinen und digital gesteuerten Prozessen garantieren wir höchste Qualität und maximale Effizienz – für langlebige und nachhaltige Bauwerke.
          </p>
      
        </div>
        <div className="p-8 space-y-3 border-2 border-red-400 rounded-xl">
          <span className="inline-block text-red-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
          Erfahrung
          </h1>
          <p className="text-gray-500 ">
          Unsere langjährige Erfahrung und fundierte Fachkompetenz im Zimmererhandwerk ermöglichen es uns, maßgeschneiderte Lösungen für unterschiedlichste Bauprojekte zu realisieren. Ein starkes, dynamisches Team kombiniert mit einem breit aufgestellten Netzwerk aus erfahrenen Partnern sorgt dafür, dass wir stets flexibel, zuverlässig und innovativ arbeiten – mit Stolz und Leidenschaft für Holzbau.
          </p>
       
        </div>
        <div className="p-8 space-y-3 border-2 border-red-400 rounded-xl">
          <span className="inline-block text-red-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
          Transparenz

          </h1>
          <p className="text-gray-500 ">
          Vertrauen entsteht durch Offenheit – deshalb ist Transparenz ein zentraler Bestandteil unserer Arbeit. Von der ersten Beratung bis zur Fertigstellung legen wir Wert auf klare Kommunikation, detaillierte Kostenübersicht und nachvollziehbare Prozesse. Sie wissen jederzeit, woran Sie bei uns sind. Unsere Projekte sind durchgängig überprüfbar, sodass Sie sich auf Qualität, Fairness und Verlässlichkeit verlassen können.
          </p>
        
        </div>
      </div>
    </div>
  </section>
{/* our seviec */}
<div className="bg-gray-200 px-2 py-10">
  <div id="features" className="mx-auto max-w-6xl">
    <p className="text-center text-base font-semibold leading-7 text-primary-500">
      Features
    </p>
    <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      {services.map((item,index) => (
       
       <li
       key={index}
       className="rounded-xl cursor-pointer bg-white px-6 py-8 shadow-sm transition-all duration-300 ease-in-out hover:border-2 hover:border-red-500 hover:shadow-lg"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="size-10 mx-auto"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
         />
       </svg>
     
       <h3 className="my-3 font-display font-medium">{item.title}</h3>
       <p className="mt-1.5 text-sm leading-6 text-secondary-500">
         {item.description}
       </p>
     </li>  
      
      ))}
      
    
    </ul>
  </div>
  <div></div>
</div>
<PartnerSlider/>
{/* images */}

<section className="bg-white py-8 lg:py-16">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <div className="text-center mb-8 lg:mb-16">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Ein Einblick in unsere tägliche Arbeit
      </h2>
      <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* Row 1 */}
      <div className="flex justify-center items-center">
        <img
          src="/img/2.webp"
          alt="Work Image 1"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/3.webp"
          alt="Work Image 2"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/4.webp"
          alt="Work Image 3"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/5.webp"
          alt="Work Image 4"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Row 2 */}
      <div className="flex justify-center items-center">
        <img
          src="/img/5.webp"
          alt="Work Image 5"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/6.webp"
          alt="Work Image 6"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/7.webp"
          alt="Work Image 7"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/8.webp"
          alt="Work Image 8"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Row 3 */}
      <div className="flex justify-center items-center">
        <img
          src="/img/10.webp"
          alt="Work Image 9"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/11.webp"
          alt="Work Image 10"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/12.webp"
          alt="Work Image 11"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/img/13.webp"
          alt="Work Image 12"
          className="w-full h-52 object-cover"
        />
      </div>
    </div>
  </div>
</section>
    <GoogleReviews/>
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
      So funktioniert es

      </p>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
      Starte dein Projekt in 4 einfachen Schritten
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
      Beginne mit uns und realisiere dein Vorhaben in nur 4 einfachen Schritten.

</p>
    </div>
    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
      <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Kontaktaufnahme
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Nimm unverbindlich Kontakt mit uns auf. Wir besprechen deine Anforderungen und Wünsche.

</h4>
        </div>
      </li>
      <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Kostenlose Erstberatung
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Erhalte eine kostenlose Beratung und eine Erstbesichtigung vor Ort. Gemeinsam planen wir die nächsten Schritte.

</h4>
        </div>
      </li>
      <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Angebot & Planung
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Basierend auf der Beratung erstellen wir ein maßgeschneidertes Angebot und planen die Umsetzung.

</h4>
        </div>
      </li>
      <li className="flex-start group relative flex lg:flex-col">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Umsetzung & Fertigstellung
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Unser erfahrenes Team führt die Arbeiten professionell und termingerecht durch. Du erhältst ein hochwertiges Ergebnis.

</h4>
        </div>
      </li>
    </ul>
  </div>
</section>
    </>
  );
}