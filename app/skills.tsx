// components/Skills.tsx

const skills = [
  {
    category: "Testing",
    items: [
      { name: "Test Case Design", image: "/tc.png" },
      { name: "Defect Tracking", image: "/dt.png" },
      { name: "Debugging", image: "/db.png" },
      { name: "Manual Testing", image: "/mt.png" },
      { name: "Automation", image: "/at.png" },
      { name: "API Testing", image: "/api.png" },
    ],
  },
  {
    category: "Basic Web Development",
    items: [
      { name: "HTML5", image: "/html.svg" },
      { name: "TailWind", image: "/t.svg" },
      { name: "JavaScript", image: "/js.svg" },
      { name: "TypeScript", image: "/ts.svg" },
      // { name: "C#", image: "/c++.svg" },
      { name: "MongoDB", image: "/mongo.svg" },
      // { name: "Node.js", image: "/node.svg" },
      { name: "Next.js", image: "/next.svg" },
      // { name: "React", image: "/react.svg" },
      // { name: "ASP.net", image: "/asp.png" },
      { name: "MySQL", image: "/mysql.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Postman", image: "/post.svg" },
      { name: "OWASP ZAP", image: "/owas.png" },
      { name: "Apache JMeter", image: "/jmeter.svg" },
      { name: "Cypress", image: "/Cypress.svg" },
      { name: "Jira", image: "/jira.svg" },
      { name: "Figma", image: "/Figma.svg" },
      { name: "GitLab", image: "/gitlab.svg" },
      { name: "Slack", image: "/slack.png" },
      { name: "Confluence", image: "/conf.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#f3f5f7]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold -mt-4 mb-8 text-black">Skills</h1>
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {skillCategory.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillCategory.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-card bg-gray-100 p-4 rounded shadow-lg"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 mx-auto"
                  />
                  <p className="mt-2 text-gray-700">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
