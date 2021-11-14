import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchPage = async () => {
      const res = await axios.get('wp-json/wp/v2/pages?slug=home');
      const page = res.data[0];
      console.log(page);

      setTitle(page.acf.title);
      setDescription(page.acf.description);

      setLoading(false);
    }
    fetchPage();
  }, []);

  return (
    <div className="self-center mx-auto">
      {!loading && <>
        <h1 className="font-semibold text-gray-200 text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        <p className="font-light text-gray-400 text-xl pt-3">{description}</p>
        <Link to="/contact" className="block sm:inline-block mt-12 py-3 px-10 font-semibold text-xl sm:text-2xl text-center sm:text-left text-teal-300 border border-teal-300 hover:bg-teal-300 hover:bg-opacity-10 transition-colors rounded">Let's talk!</Link>
      </>}
    </div >
  );
}

export default Home;
