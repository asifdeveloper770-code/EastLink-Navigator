import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Dar es Salaam, Tanzania",
    quote:
      "EastLink made it so easy to shop from U.S. stores. They kept me updated throughout the process, and my order arrived safely and on time. I look forward to using their service again.",
  },
  {
    name: "James K.",
    location: "Nairobi, Kenya",
    quote:
      "I ordered electronics from the USA, and EastLink handled everything—from purchasing to delivery. The process was smooth, and customer service was excellent.",
  },
  {
    name: "Grace N.",
    location: "Lusaka, Zambia",
    quote:
      "Their door-to-door delivery service saved me so much time. My package arrived in excellent condition, and the team was professional from start to finish.",
  },
  {
    name: "David T.",
    location: "Kampala, Uganda",
    quote:
      "I needed authentic supplements from the U.S., and EastLink helped me source and ship them quickly. Great communication and reliable service.",
  },
  {
    name: "Amina R.",
    location: "Zanzibar, Tanzania",
    quote:
      "I ordered clothing and beauty products, and everything arrived exactly as expected. I appreciate the regular updates and secure packaging.",
  },
  {
    name: "Peter S.",
    location: "Blantyre, Malawi",
    quote:
      "Fast, reliable, and trustworthy. EastLink made international shopping simple. I highly recommend their services to anyone looking to buy products from the USA.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-navy">
            Trusted by Customers Across Africa
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See why customers trust EastLink Logistics to purchase, ship,
            and deliver products safely from the United States.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-14 pb-14"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 text-xl text-gold">
                  ★★★★★
                </div>

                <p className="italic leading-7 text-muted-foreground">
                  "{item.quote}"
                </p>

                <div className="mt-8 border-t border-border pt-5">
                  <h3 className="font-bold text-navy">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}