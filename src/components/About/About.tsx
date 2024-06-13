import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import Sam from "../../assets/About/about.jpg";

import "./About.css";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About">
      <img src={Sam} alt="" />
      <div className="F-OldStandard AboutText">
        <h1 className="F-Active PaleGreen">Hi, I'm Sam!</h1>
        <p>
          Whilst on the road I began using photography as a medium to document
          my adventures, volunteering whenever possible alongside environmental
          organisations and ethical companies.
        </p>
        <p>
          Eventually I felt as though I had even more to offer, and discovered
          that web development was scratching an itch for problem solving I'd
          had since graduating, allowing me to combine creativity with my
          natural analytical skillset.
        </p>
        <p>
          My portfolio is a showcase of everything I have taught myself. I am
          always tenacious in my quest to learn more, even if that meant
          bringing my laptop to the ski hill.
        </p>
        <p>
          Combining 7 years of hospitality work experience, an eternal drive for
          self-improvement, a rich array of outdoor interests and a vocation for
          development encapsulates exactly what makes me, me!{" "}
        </p>
        <small>
          <a
            className=""
            href="https://www.linkedin.com/in/sam-creasey-056b371b7"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedin} /> Hire me.{" "}
          </a>
          If you liked this blurb, you'll love the book.{" "}
        </small>
      </div>
    </div>
  );
};
