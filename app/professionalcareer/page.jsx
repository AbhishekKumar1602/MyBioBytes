const careerData = [
  {
    company: "Expedien eSolution",
    details: "Full-Time · March 2023 – Present · On-Site",
    roles: [
      {
        title: "DevOps Engineer",
        period: "Sep 2024 – Present",
        highlightColor: "bg-emerald-400",
        responsibilities: [
          "Built and optimized CI/CD pipelines for 25+ projects using GitLab CI/CD, integrating builds, creating Docker images, and deploying to AWS ECS, boosting deployment efficiency by 40%.",
          "Containerized 40+ applications, including Laravel, Yii, ReactJS, NextJS, FastAPI, and legacy .NET 4, by building optimized Docker images, enabling scalable, efficient, and consistent deployments on AWS ECS.",
          "Deployed and managed multiple open source application like GitLab CE, OpenProject, MatterMost etc, on AWS, provisioning development environments and implementing automated backup/restore processes with EC2, RDS, S3, and IAM, ensuring seamless workflows and data integrity.",
          "Migrated from SVN to Git and GitLab CE, reducing repository size by 60% and enhancing version control efficiency while minimizing merge conflicts.",
        ],
      },
      {
        title: "Software Developer – Assistant Consultant",
        period: "Sep 2023 – Aug 2024",
        highlightColor: "bg-slate-500",
        responsibilities: [
          "Created a FastAPI-based backend for an LLM-powered RAG application, with plug-and-play integration for multiple LLMs & databases, role-based user management, and streaming chat APIs.",
          "Built a Frappe-Based Armory Management and Weapons Tracking System with RFID integration for a state police department, improving asset monitoring and operational effectiveness.",
          "Developed a Frappe-Based Ticketing System for University Management, enabling real-time issue tracking and interactive data visualization through dashboards.",
        ],
      },
      {
        title: "Software Developer – Trainee",
        period: "Mar 2023 – Aug 2023",
        highlightColor: "bg-slate-500",
        responsibilities: [
          "Gained hands-on experience in Linux, Python, JavaScript, SQL, and Frappe Framework. Worked on agile-based web app development projects.",
          "Contributed in Creating and Maintaining Detailed Technical Documentation for Various Projects.",
        ],
      },
    ],
  },
  
];

export default function ProfessionalCareer() {
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-4xl font-extrabold">Professional Career</h1>

      <div className="mt-6 space-y-4">
        {careerData.map((company, idx) => (
          <article key={idx} className="card">
            <h2 className="text-2xl font-bold">{company.company}</h2>
            <p className="text-sm text-slate-400">{company.details}</p>

            <div className="mt-3 space-y-6 pl-6 relative">
              {company.roles.map((role, rIdx) => (
                <div key={rIdx} className="relative">
                  <span
                    className={`absolute -left-[22px] top-1 w-3 h-3 ${role.highlightColor} rounded-full border border-slate-800`}
                  ></span>
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="text-sm text-slate-400">{role.period}</p>
                  <ul className="mt-1 text-slate-300 list-disc ml-5">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
