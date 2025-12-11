import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Contact() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Bedangshu Raj Mudiar | Contact</title>
      </Helmet>
      <div className="flex w-full flex-col gap-y-8 bg-mainBg px-8 pt-5">
        <ContactSocials />
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://github.com/itsbedangshu"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accentColor px-4 py-2 text-base font-semibold text-black hover:opacity-90"
          >
            View GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/bedangshu-raj-mudiar"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-accentColor px-4 py-2 text-base font-semibold text-textColor hover:bg-accentColor/10"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Contact;
