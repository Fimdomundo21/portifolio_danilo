import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Zappas from "../../img/zappas.jpg";
import Lucas from "../../img/Lucas.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Zappas,
      review:
        "Ho iniziato il mio lavoro con Danilo 2 anni fa. Ho 5 panetterie nella regione di São José do Rio Preto, nell'entroterra di San Paolo, chiamate Zappa's. Ho esternalizzato tutto il mio lavoro a Danilo e ho solo cose positive da dire. Dì con lui l'accesso al mio sito web, Instagram, Facebook. Ottimo lavoro e grande professionista.",
    },
    {
      img: Lucas,
      review:
        "Sono stato il primo senior che Danilo ha avuto nel modo di programmare. Abbiamo lavorato insieme all'Ipe Park Hotel di São José do Rio Preto, un viaggio di 06 mesi, breve ma efficiente. Sono riuscito a insegnargli il più possibile. Ti auguro tutta la fortuna il mio partner.",
    },
    {
      img: profilePic3,
      review:
        "Ho lavorato con Danilo presso l'agenzia di marketing chiamata Setting Produções, l'ho visto da vicino quando ha iniziato la sua carriera nella programmazione, la motivazione, la passione per il lavoro che ha svolto. Auguro al mio amico ogni successo.",
    },
    {
      img: profilePic4,
      review:
        "Ho seguito Danilo dal momento in cui è arrivato in Italia, l'ho aiutato con l'italiano, nonostante sia arrivato da poco, la sua conversazione è già notevole. Molto successo amico mio.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clienti e Amici </span>
        <span>Cosa puoi dire di me e </span>
        <span> del mio lavoro...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
