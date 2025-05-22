import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/projects/1.png",
    title: "Internity",
    tags: ["API", "MVC", "Fullstack"],
    projectLink: "https://internity.smkn1cibinong.sch.id/",
    description:
      "A full-featured internship management platform for students and institutions built with a fullstack MVC architecture.",
  },
  {
    imgSrc: "/images/projects/2.png",
    title: "Blabbiokes",
    tags: ["PHP Native", "MVC", "Fullstack"],
    projectLink: "https://bblabbiokes.go.id/",
    description:
      "A government-backed online medical testing system enabling users to book and view their lab results seamlessly.",
  },
  {
    imgSrc: "/images/projects/3.png",
    title: "Wiyatra",
    tags: ["Development", "API"],
    projectLink: "https://wiyatra.solu.co.id/",
    description:
      "An advanced digital tourism app that helps users explore destinations, access travel information, and interact with local services.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, description, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              description={description}
              tags={tags}
              projectLink={projectLink}
              clases="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
