import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchPage = async () => {
      const res = await axios.get('wp-json/wp/v2/pages?slug=about');
      const page = res.data[0];
      console.log(page);

      setDescription(page.acf.description);

      setLoading(false);
    }
    fetchPage();
  }, []);

  return (
    <div className="mt-6">
      {!loading && <>
        <h2 className="text-4xl font-medium text-gray-200 mb-5">About Me</h2>
        <p className="text-gray-400">
          {description}
        </p>
      </>}
    </div >
  );
}

export default About;
