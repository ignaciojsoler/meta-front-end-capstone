import logoType from "../assets/LogoLight.svg";
import { navigation, contact, socialMedia } from "../data/pages";

const Footer = () => {

    const footerSections = [
        {
            title: "Navigation",
            links: navigation
        },
        {
            title: "Contact",
            links: contact
        },
        {
            title: "Social Media",
            links: socialMedia
        }
    ]

  return (
    <div className="w-full bg-dark">
      <footer className="w-full max-w-4xl mx-auto px-8 py-6 flex flex-col items-center gap-y-8 md:flex-row md:items-start md:justify-between md:gap-y-4">
        <img src={logoType} alt="Logo" className="h-16 w-auto self-center" />
        {
            footerSections.map((section) => (
                <div key={section.title}>
                    <h4 className="text-center md:text-left text-white font-heading text-3xl pb-4">{section.title}</h4>
                    <ul className="space-y-2 text-center md:text-left">
                        {section.links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-white hover:text-gray-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
      </footer>
    </div>
  );
};

export default Footer;
