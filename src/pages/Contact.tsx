import { useEffect, useState } from "react";
import { VscGithubAlt, VscMail } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

import axios from "axios";
const Contact = () => {
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

    <div className="self-center mx-auto text-center">
      <div className="mb-8">
        <h2 className="text-5xl font-medium text-gray-200 mb-8">Get In Touch</h2>
        <hr className="border-teal-300" />
      </div>
      <div className="flex justify-center gap-8 text-gray-300">
        {email && (
          <a className="text-6xl hover:text-teal-300" href={`mailto:${email}`}>
            <VscMail />
          </a>
        )}
        {githubUrl && (
          <a className="text-6xl hover:text-teal-300" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <VscGithubAlt />
          </a>
        )}
        {linkedinUrl && (
          <a className="text-6xl hover:text-teal-300" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        )}
      </div>
    </div >
  );
}

export default Contact;
