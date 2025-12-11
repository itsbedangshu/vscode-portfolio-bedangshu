import { Helmet, HelmetProvider } from "react-helmet-async";

const certifications = [
  "Google Cybersecurity Professional Certificate – Coursera",
  "Cybersecurity Exploiting Course Certificate – Udemy",
  "Master Course: Cybersecurity Ransomware Incident Response – Udemy",
  "The Complete Computer Forensics Course for 2023 (pro:cfct+) – Udemy",
  "SQLite Made Easy – Udemy",
  "Introduction to MERN Stack – Desun Technology Pvt. Ltd.",
  "Human Resource Development – NPTEL",
  "Human Computer Interaction – NPTEL",
  "Information Security Fundamentals – Udemy",
  "Uncle Rat's Jenkins Hacking Handbook – Udemy",
  "Linux Security – Udemy",
  "Master Course in Cloud Computing and Cloud Architecture 2.0 – Udemy",
  "Master Course in Cloud Security 3.0 – Udemy",
  "Master Course in Operational Risk Management (ORM) – Udemy",
  "Master Course on Corporate Governance and IT Governance 2.0 – Udemy",
  "Master Course on Enterprise Risk Management (ERM) – Udemy",
  "Web 3 Developmental Essentials – Udemy",
  "C# for .NET Developers – Coursera (Ongoing)",
  "The Blockchain – Coursera (Ongoing)",
  "Microsoft Project Management Professional Certificate – Coursera (Ongoing)",
];

const workshops = [
  "5-Day Bootcamp on Ethical Hacking & Digital Forensics – NIT Raipur",
  "Remark Skill Technical Workshop: Ethical Hacking – IIT Guwahati",
  "Build and Break Cybersecurity Workshop – GDSC SMIT",
  "SRF SMU Summer Intern: Web Development Training – SMIT",
  "Summer Intern – Assam Electronics Development Corporation Ltd (Web Dev & ML)",
  "1-Day MERN Stack Workshop – Desun Technologies",
  "Summer Intern at IOCL Guwahati",
];

function Certificates() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Bedangshu Raj Mudiar | Certificates</title>
      </Helmet>
      <div className="p-8 space-y-10">
        <div>
          <h1 className="pb-4 text-3xl font-semibold text-textColor">
            Certifications
          </h1>
          <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-articleBg p-4 text-textColor shadow-sm"
              >
                <h2 className="text-base font-semibold md:text-lg">{item}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="pb-4 text-2xl font-semibold text-textColor">
            Workshops & Trainings
          </h2>
          <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
            {workshops.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-articleBg p-4 text-textColor shadow-sm"
              >
                <h3 className="text-base font-semibold md:text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Certificates;
