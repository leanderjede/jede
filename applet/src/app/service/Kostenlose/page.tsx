import TestimonialSlider from '@/app/component/Ui/ReviewSlider';
import ServiceSlide from '@/app/component/Ui/Swiperslide';
import React from 'react';

const Page = () => (
  <div>
    <ServiceSlide />
    <hr className='w-2 bg-red-600 text-red-600' />
    <section className="bg-gray-100 py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Free Initial Consultation & On-Site Inspection
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get expert advice and a detailed assessment for your project—completely free!
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-800 transition">
          Book a Free Consultation
        </button>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "No Obligations", desc: "You can seek expert advice without any pressure or commitment. We provide honest and professional guidance, allowing you to explore your options freely before making a decision. Our goal is to empower you with the right knowledge, not to force a sale." },
          { title: "Accurate Estimates", desc: "We believe in transparency. Our pricing is clear, competitive, and free from hidden fees or unexpected costs. You’ll receive a detailed breakdown of what to expect, ensuring there are no surprises along the way. Get an upfront estimate you can trust." },
          { title: "Personalized Solutions", desc: "Every individual has unique needs, and we tailor our recommendations accordingly. Whether you're looking for a custom plan, specialized services, or expert insights, we ensure that our solutions align perfectly with your goals and preferences.." },
          { title: "Identify Issues Early", desc: "Proactive evaluation helps prevent costly mistakes. Our experts analyze your situation thoroughly to detect potential challenges before they become major problems. This saves you time, money, and unnecessary stress by addressing concerns at an early stage." }
        ].map((item, index) => (

          <div key={index}>
            <div className="border-t-8 border-red-900 border-sol border-brand-secondary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[300px] rounded-xl  p-5 w-full h-full">
              <div className="flex flex-col">
                <div>
                  <h4 className="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title">
                    {item.title}
                  </h4>
                </div>
                <p className="text-base leading-normal text-light-content text-sm font-normal not-italic">
                  {item.desc}
                </p>
              </div>
            </div>


          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="p-4 max-w-xl mx-auto dark:bg-gray-800">
        <h2 className="font-heading dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl">
          {/* How It Works – Free Initial Consultation & On-Site Inspection */}
          Wie es funktioniert-KOSTENLOSE Erstberatung und Vor-Ort-Inspektion
                  </h2>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              {/* Step 1: Schedule Your Free Consultation */}
              Schritt 1: Planen Sie Ihre kostenlose Beratung


            </p>
            <p className="text-gray-600 dark:text-slate-400">
              
              {/* Get in touch with us via phone or email to book a free consultation at your convenience. We will arrange a time that works best for you. */}
              Wenden Sie sich telefonisch mit uns in Verbindung, um eine kostenlose Beratung nach Belieben zu buchen. Wir werden eine Zeit arrangieren, die für Sie am besten geeignet ist.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              {/* Step 2: On-Site Inspection & Assessment */}
              Schritt 2: Inspektion und Bewertung vor Ort

            </p>
            <p className="text-gray-600 dark:text-slate-400">
              {/* Our experts will visit your location to assess the project requirements, evaluate the space, and understand your specific needs. */}
              Unsere Experten besuchen Ihren Standort, um die Projektanforderungen zu bewerten, den Raum zu bewerten und Ihre spezifischen Anforderungen zu verstehen.

            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500" />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              {/* Step 3: Receive Expert Recommendations */}
              Schritt 3: Erhalten Sie Expertenempfehlungen
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              {/* After the inspection, we will provide you with a detailed overview of potential solutions, estimated costs, and expert advice to help you make an informed decision.. */}
              Nach der Inspektion geben wir Ihnen einen detaillierten Überblick über potenzielle Lösungen, geschätzte Kosten und fachkundige Beratung, um eine fundierte Entscheidung zu treffen.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white dark:text-slate-200"
                >
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              {/* Ready! */}
              Bereit!
            </p>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <TestimonialSlider />
    </section>
  </div>
)

export default Page;
