import React from "react";
import "./portfolio.css";

// import IMG1 from "../../assets/banner.jpg";
import IMGdashboard from "../../assets/dashboard-react-mui.PNG";
import IMGgoogleClone from "../../assets/google-clone-next-tailwind.PNG";
import IMGnemplaSite from "../../assets/nempla-site.PNG";
import IMGfrontendMentor from "../../assets/frontend-mentor-ecommerce.PNG";
import IMGinteractiveComments from "../../assets/interactive-comments.PNG";

const data = [
  {
    id: 1,
    image: IMGdashboard,
    title: "Admin Dashboard - React/MUI",
    github: "https://github.com/Alan-Senderovich/Dashboard-React-mui",
    demo: "https://dashboard-react-mui.vercel.app/",
  },
  {
    id: 2,
    image: IMGgoogleClone,
    title: "Google clone fully responsive - NextJS & TailwindCSS",
    github: "https://github.com/Alan-Senderovich/googleClone_nextTailwind",
    demo: "https://google-clone-next-tailwind-bige13b0b-alan-senderovich.vercel.app/",
  },
  {
    id: 3,
    image: IMGnemplaSite,
    title: "WordPress site made with Elementor",
    demo: "https://nempla.com/",
  },
  {
    id: 4,
    image: IMGfrontendMentor,
    title: "FrontendMentor Challenge - E-commerce page - React & Tailwind",
    github:
      "https://github.com/Alan-Senderovich/Challenge-FrontendMentor-ecommerce-main-page",
    demo: "https://benevolent-bavarois-cad2ab.netlify.app/",
  },
  {
    id: 5,
    image: IMGinteractiveComments,
    title: "FrontendMentor Challenge - Interactive Comments Page - React & Tailwind",
    github: "https://github.com/Alan-Senderovich/Interactive-comments-page",
    demo: "https://gleeful-mandazi-45aacc.netlify.app/",
  },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: "Crypto Currency Dashboard",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data &&
          data.map((item) => (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="proj1" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
