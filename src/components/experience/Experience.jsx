import React from "react";
import "./experience.css";
import { RiCheckboxFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";

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
              <SiHtml5 className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCss3 className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiChakraui className="experience__details-icon-tech" />
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
              <SiNestjs className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NestJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpressvpn className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon-tech" />
              <RiCheckboxFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon-tech" />
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
