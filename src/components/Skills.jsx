import React from "react";
import Title from "./Title";

function Skills() {
  const skills = [
    {
      title: "Languages",
      stack: ["HTML", "CSS", "JavaScript", "Python", "C#", "PHP", "Java"],
    },
    {
      title: "Frameworks",
      stack: [
        "Sass",
        "Tailwind",
        "Bootstrap",
        "React",
        "ASP.NET",
        "ASP.NETCore",
        "Next",
        "Svelte",
        "Laravel",
        "Flask",
        "TenserFlow",
        "NodeJS(Express)",
      ],
    },
    {
      title: "Tools",
      stack: ["Git", "Doker", "VsCode", "REST API", "GraphQL", "WordPress", "Shopify"],
    },
  ];
  return (
    <div className="pt-20 pb-6">
      <Title>Skills</Title>{" "}
      <div className="flex flex-col md:flex-row items-center justify-start flex-wrap">
        {skills.map((group, groupIndex) => (
          <div key={groupIndex}>
            <span className="">{group.title}</span>
            <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white m-3 ">
              {group.stack.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md hover:underline underline-offset-2 decoration-2 decoration-red-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
