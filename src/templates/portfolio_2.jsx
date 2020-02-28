import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Landing from "../portfolio_2/landing";
import About from "../portfolio_2/about";
import Education from "../portfolio_2/education";
import Work from "../portfolio_2/work";
import Volunteer from "../portfolio_2/volunteer";
import Extra from "../portfolio_2/extra";
import Contact from "../portfolio_2/contact";

import '../style/portfolio_2.css';



function Portfolio2(props) {
  const scrollFunc = () => scroll.scrollTo(window.innerHeight);
  const profile = props.appData.profile;
  return (
      <div class="portfolioContainerFull2">
        <Landing
          name={profile.user.name}
          label={profile.about.label}
          img={profile.about.imgUrl}
          initScroll={scrollFunc}
        />
        <div class="portfolioBodyCont" style={{ top: window.innerHeight + 'px' }}>
          <About summary={profile.about} top={window.innerHeight} />
          <Education education={profile.education} />
          <Work work={profile.work} />
          <Volunteer volunteer={profile.volunteer} />
          <Extra
            awards={profile.awards}
            publications={profile.publications}
            languages={profile.languages}
            skills={profile.skills}
          />
          <Contact
            email={profile.user.email}
            phone={profile.about.number}
            location={profile.location}
          />
        </div>
      </div>
  );
}

export default Portfolio2;
