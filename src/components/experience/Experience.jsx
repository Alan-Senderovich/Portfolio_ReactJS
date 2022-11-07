import React from "react";
import "./experience.css";
import { RiCheckboxFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>Chakra UI</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ====== END OF FRONTEND ======  */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NestJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
