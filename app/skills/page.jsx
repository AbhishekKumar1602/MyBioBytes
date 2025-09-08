// Skills.js

const skillsData = [
  {
    category: "Cloud Computing",
    items: [
      "AWS (EC2, ECS, EKS, RDS, S3)",
      "Networking (VPC, Subnets, Security Groups)",
      "Monitoring (CloudWatch, CloudTrail)",
    ],
  },
  {
    category: "Docker",
    items: [
      "Image creation & optimization",
      "Docker Compose & Multi-stage builds",
      "Container orchestration with ECS/Kubernetes",
    ],
  },
  {
    category: "Jenkins",
    items: [
      "Pipeline as Code (Jenkinsfile)",
      "Integrations (Git, Docker, Kubernetes)",
      "Automated testing & deployments",
    ],
  },
  {
    category: "GitHub",
    items: [
      "GitHub Actions (CI/CD)",
      "Repository management & branching strategies",
      "Code reviews & collaboration",
    ],
  },
  {
    category: "Git",
    items: [
      "Branching & merging workflows",
      "Rebasing & conflict resolution",
      "Git hooks & advanced commands",
    ],
  },
  {
    category: "Shell Scripting",
    items: [
      "Automation of daily tasks",
      "Log analysis & system monitoring",
      "Backup & deployment scripts",
    ],
  },
  {
    category: "FastAPI Framework",
    items: [
      "Building RESTful APIs",
      "Data validation with Pydantic",
      "Authentication & security",
    ],
  },
  {
    category: "Frappe Framework",
    items: [
      "Custom App Development",
      "Doctype & Workflow customization",
      "ERPNext Integrations",
    ],
  },
  {
    category: "PostgreSQL",
    items: [
      "Schema design & normalization",
      "Query optimization & indexing",
      "Backup & replication strategies",
    ],
  },
  {
    category: "JavaScript",
    items: [
      "ES6+ features",
      "Async programming (Promises, async/await)",
      "Frontend frameworks (React, Next.js)",
    ],
  },
  {
    category: "Python",
    items: [
      "Scripting & automation",
      "Web frameworks (FastAPI, Django)",
      "Data processing (Pandas, NumPy)",
    ],
  },
  {
    category: "Linux",
    items: [
      "User & permission management",
      "Process & service management",
      "Networking & system troubleshooting",
    ],
  },
];

export default function Skills() {
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-4xl font-extrabold">Skills</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="card">
            <h3 className="font-semibold">{skill.category}</h3>
            <ul className="mt-2 text-slate-300 list-disc ml-5">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
