import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/skills/laravel.svg",
    label: "Laravel",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/php.svg",
    label: "PHP",
    desc: "",
  },
  {
    imgSrc: "/images/skills/vue.svg",
    label: "Vue",
    desc: "",
  },
  {
    imgSrc: "/images/skills/javascript.svg",
    label: "JavaScript",
    desc: "",
  },
  {
    imgSrc: "/images/skills/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/typescript.svg",
    label: "Typescript",
    desc: "",
  },
  {
    imgSrc: "/images/skills/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/python.svg",
    label: "Python",
    desc: "",
  },
  {
    imgSrc: "/images/skills/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/figma.svg",
    label: "Figma",
    desc: "Slicing Design",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
              imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
