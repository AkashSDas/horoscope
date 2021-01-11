import React from "react";
import { ZodiacInfoObj } from "../zodiac_info";
import { ZodiacCard } from "./zodiac_card";

export const ZodiacContainer = (props) => {
  return (
    <section className="zodiac-container" ref={props.partnerZodiacContainerRef}>
      <h3>{props.title}</h3>

      <div className="zodiac-grid">
        {ZodiacInfoObj.map((item, index) => (
          <ZodiacCard
            whose={props.whose}
            zodiacSign={props.zodiacSign}
            setZodiacSign={props.setZodiacSign}
            key={index}
            name={item.name}
            timeline={item.timeline}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};
