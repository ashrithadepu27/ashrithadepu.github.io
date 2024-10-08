import * as React from "react";
import "./intro.scss";

const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Ashrith Adepu",
  afterName: ", a Mechanical Engineer with expertise in simulation, control systems, and mechanical design. I’ve optimized wind turbine performance and modeled EV powertrains, always aiming to push boundaries in efficiency and innovation.",
  contact: "Get in touch ",
  email: "adepashrith@gmail.com",
  mailTo: "mailto:adepashrith@gmail.com",
};

const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseOver = () => setIsHovering(true);
  const onMouseOut = () => setIsHovering(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="intro">
      <h1 className="intro__hello">
        {introData.title}
        <span
          className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onFocus={onMouseOver}
          onBlur={onMouseOut}
          role="button"
          tabIndex={0}
          aria-label="wave hand"
        ></span>
      </h1>

      <h2 className="intro__tagline">
        {introData.beforeName}
        <span className="name">{introData.name}</span>
        {introData.afterName}
        <span className="emoji technologist"></span>
      </h2>

      <h3 className="intro__contact">
        <span>{introData.contact}</span>
        <span className="emoji pointer"></span>
        <a href={introData.mailTo} className="highlight-link">
          {introData.email}
        </a>
      </h3>
    </header>
  );
};

export default Intro;
