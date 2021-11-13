import axios from "axios";
import { useEffect, useState } from "react";
import { VscGithubAlt, VscMail } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {

  const [email, setEmail] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [linkedinUrl, setLinkedinUrl] = useState<string>("");

  useEffect(() => {
    const fetchPage = async () => {
      const res = await axios.get('wp-json/wp/v2/pages?slug=contact');
      const page = res.data[0];
      console.log(page);

      setEmail(page.acf.email);
      setGithubUrl(page.acf.github);
      setLinkedinUrl(page.acf.linkedin);
    }
    fetchPage();
  }, []);

  return (
    <footer className="container mx-auto p-6 flex justify-between">
      <div className="">
        <ul className="flex space-x-5">
          <li>
            <a className="text-3xl hover:text-teal-300" href={`mailto:${email}`}>
              <VscMail />
            </a>
          </li>
          <li>
            <a className="text-3xl hover:text-teal-300" href={githubUrl} target="_blank" rel="noopener noreferrer">
              <VscGithubAlt />
            </a>
          </li>
          <li>
            <a className="text-3xl hover:text-teal-300" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div>
        &copy; {new Date().getFullYear()}
      </div>
    </footer >
  );
}

export default Footer;
