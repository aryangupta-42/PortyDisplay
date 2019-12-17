import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from "./portfolio/landing";
import About from "./portfolio/about";
import Education from "./portfolio/education";
import Work from "./portfolio/work";
import Volunteer from "./portfolio/volunteer";
import Extra from "./portfolio/extra";
import Contact from "./portfolio/contact";

import './portfolio.css';
import { profile } from './file.json';

function App() {
  return (
    <div class="portfolioContainerFull">
        <Landing
          name={profile.user.name}
          label={profile.about.label}
        />
        <About summary={profile.about} />
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
          phone={profile.user.phone}
          location={profile.location}
        />
      </div>
  );
}

export default App;
