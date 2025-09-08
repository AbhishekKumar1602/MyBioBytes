const accreditations = [
  {
    title: "Bachelor of Technology in Civil Engineering",
    org: "Dr. A.P.J. Abdul Kalam Technical University",
    date: "Aug 2013 - July 2017",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Issue Date: July 7, 2024.",
    file: "/certificates/aws-ccp-cert.pdf",
  },
];

export default function Accreditation() {
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-4xl font-extrabold">Accreditations</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {accreditations.map((item, idx) => (
          <div key={idx} className="card">
            <h3 className="font-semibold">{item.title}</h3>
            {item.org && <p className="text-sm text-slate-400">{item.org}</p>}
            {item.date && <p className="text-sm text-slate-400">{item.date}</p>}
            {item.file && (
              <a
                href={item.file}
                download={item.file.split("/").pop()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-emerald-300"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
