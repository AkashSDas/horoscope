import React from "react";

export const ZodiacCard = (props) => {
  const handleClick = () => {
    props.setZodiacSign(props.name);
  };

  const [filter, setFilter] = React.useState(null);

  React.useEffect(() => {
    setFilter(getDisabledFilter());
  }, [props.zodiacSign]);

  const getDisabledFilter = () => {
    console.log(props.name !== props.zodiacSign, props.zodiacSign);
    if (props.zodiacSign && props.name !== props.zodiacSign) {
      return "grayscale(90%)";
    }
    return "grayscale(0%)";
  };

  return (
    <div
      style={{
        filter: `${filter}`,
      }}
      className="zodiac-card"
      onClick={handleClick}
    >
      <div className="img-container">
        <img src={props.imgSrc} alt={props.name} />
      </div>
      <div className="name">{props.name}</div>
      <div className="timeline">{props.timeline}</div>
    </div>
  );
};
