import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchTitle = async () => {
      const res = await axios.get('wp-json');
      const pageData = res.data;
      console.log(pageData);
      setTitle(pageData.name);
    }

    const fetchMenu = async () => {
      const res = await axios.get('wp-json/wp/v2/menu');
      const menuItems = res.data;
      console.log(menuItems);
      setMenuItems(menuItems);
    }

    fetchTitle();
    fetchMenu();
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="text-gray-200 mr-6">
        <NavLink className="font-semibold text-xl tracking-tight" to="/">
          {title}
        </NavLink>
      </div>
      <div className="block md:hidden">
        <button
          className="px-3 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current text-gray-200 h-6 w-6 hover:text-white" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={"w-full md:block md:w-auto " + (isOpen ? "" : "hidden")}>
        <div className="text-sm md:flex-grow">
          {menuItems && menuItems.map((item: any, idx: number) => (
            <NavLink key={idx} className="block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-teal-300 mr-4" to={`/${item.title.toLowerCase() === "home" ? "" : item.title.toLowerCase()}`}>
              {item.title}
            </NavLink>
          ))}
        </div>

      </div>
    </nav >
  );
}

export default Navbar;
