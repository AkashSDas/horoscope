import React, { useEffect, useRef, useState } from "react";
import { ZodiacContainer } from "./zodiac_container";

export const HoroScope = () => {
  const [myZodiacSign, setMyZodiacSign] = useState(null);
  const [partnerZodiacSign, setPartnerZodiacSign] = useState(null);
  const [compatibilityScore, setCompatibilityScore] = useState(0);
  const partnerZodiacContainerRef = useRef(null);
  const compatibilityScoreRef = useRef(null);

  const scrollToPartnerZodiacContainer = () => {
    if (partnerZodiacSign) {
      partnerZodiacContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCompatibilityScore = () => {
    if (compatibilityScore) {
      compatibilityScoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToPartnerZodiacContainer, [myZodiacSign]);
  useEffect(scrollToCompatibilityScore, [partnerZodiacSign]);

  useEffect(() => {
    setCompatibilityScore(Math.floor(Math.random() * 100) + 1 + "%");
  }, [myZodiacSign, partnerZodiacSign]);

  // ==================
  // JSX
  // ==================

  const myZodiacContainerJsx = () => (
    <ZodiacContainer
      zodiacSign={myZodiacSign}
      setZodiacSign={setMyZodiacSign}
      title="SELECT YOUR SIGN"
      whose="my"
    />
  );

  const partnerZodiacContainerJsx = () => {
    if (myZodiacSign) {
      return (
        <ZodiacContainer
          partnerZodiacContainerRef={partnerZodiacContainerRef}
          zodiacSign={partnerZodiacSign}
          setZodiacSign={setPartnerZodiacSign}
          title="SELECT YOUR PARTNER'S SIGN"
          whose="partner"
        />
      );
    }
    return null;
  };

  const compatibilityScoreJsx = () => {
    if (myZodiacSign && partnerZodiacSign) {
      return (
        <div className="compatibility-score" ref={compatibilityScoreRef}>
          <h2>{compatibilityScore}</h2>
        </div>
      );
    }
    return null;
  };

  // ==================
  // RENDER
  // ==================

  return (
    <main>
      <h1 className="brand">Love HoroScope</h1>

      {/* <div className="tag-line">Find your love scope with our horoscope</div> */}

      {myZodiacContainerJsx()}
      {partnerZodiacContainerJsx()}
      {compatibilityScoreJsx()}
    </main>
  );
};
