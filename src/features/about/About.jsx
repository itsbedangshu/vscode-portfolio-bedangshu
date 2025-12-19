import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import github_icon from "../../assets/icons/github_icon.svg";
import bedangshuProfile from "../../assets/images/bedangshu-profile-v2.jpg";function About() {
  const techStackIcons = [
    { id: "react", icon: react_icon },
    { id: "tailwind", icon: tailwind_icon },
    { id: "python", icon: python_icon },
    { id: "github", icon: github_icon },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Bedangshu Raj Mudiar | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] overflow-hidden">
              <img
                src={bedangshuProfile}
                alt="Bedangshu Raj Mudiar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Full-Stack <br /> Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Im Bedangshu Raj Mudiar, a Full-Stack Developer and Cybersecurity
              Enthusiast from India.
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              Im Bedangshu Raj Mudiar, a Full-Stack Developer and Cybersecurity
              Enthusiast from India. I specialize in building secure and
              scalable web applications using MERN, Java, Spring Boot, and modern
              DevOps practices. I enjoy working on real-world systems like
              Warehouse Management Systems (WMS), HRMS, NMS dashboards,
              educational portals, and AI-powered apps. I love solving complex
              engineering problems and collaborating with teams to build
              meaningful products.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
                {techStackIcons.map((item) => {
                  return (
                    <img
                      className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                      key={item.id}
                      src={item.icon}
                      alt="tech-stack"
                    />
                  );
                })}
              </div>
              <p className="text-center text-sm font-medium text-slate-400 xl:text-base">
                Tech I work with: React.js, Node.js, Express.js, MongoDB, Java,
                Spring Boot, MySQL, Docker, GitHub, TailwindCSS, Python.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

{
  /* <p className="px-8 text-lg font-medium  md:text-xl">
&lt;p&gt; As a Junior Front-End Developer, I possess an impressive
arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I
excel in designing and maintaining responsive websites that offer a
smooth user experience. My expertise lies in crafting dynamic,
engaging interfaces through writing clean and optimized code and
utilizing cutting-edge development tools and techniques. I am also a
team player who thrives in collaborating with cross-functional teams
to produce outstanding web applications. &lt;/p&gt;
</p> */
}
export default About;
