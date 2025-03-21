'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only import Autoplay

const testimonials = [
  {
    id: 1,
    name: "Sheryl Berge",
    text: "Applet hat meinen Arbeitsablauf komplett optimiert. Die Benutzeroberfläche ist intuitiv, und die Integrationen machen es zu einem vielseitigen Tool. Sehr empfehlenswert für alle, die ihre Produktivität steigern möchten!.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 2,
    name: "Leland Kiehn",
    text: "Ich liebe es, Applet für die Automatisierung von Aufgaben zu nutzen. Es spart mir so viel Zeit. Allerdings wären ein paar mehr Anpassungsmöglichkeiten wünschenswert. Insgesamt aber großartig!",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 3,
    name: "Peter Renolds",
    text: "Unser Team nutzt Applet, und es hat wirklich alles verändert. Die Zusammenarbeit an Projekten und das Automatisieren wiederholender Aufgaben war noch nie so einfach.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 4,
    name: "ronal jack",
    text: "Applet ist im Allgemeinen hilfreich, aber es gibt gelegentlich kleine Fehler. Der Kundenservice ist jedoch sehr reaktionsschnell, was ein Pluspunkt ist. Ich hoffe, dass es weiter verbessert wird!.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 5,
    name: "jackless anckles",
    text: "TIch konnte so viele meiner täglichen Aufgaben mit Applet automatisieren. Es hat mir Stunden an manueller Arbeit erspart. Die Lernkurve ist minimal, sodass es für jeden zugänglich ist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {/* What Our Customers Are Saying */}
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]} // Only Autoplay is used
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-16 lg:mt-20"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">{testimonial.text}</p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">{testimonial.name}</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-cover"
                    />
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;