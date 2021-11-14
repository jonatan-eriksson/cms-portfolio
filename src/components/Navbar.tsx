import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ title }: { title?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get('wp-json/wp/v2/menu');
      const menuItems = res.data;
      console.log(menuItems);
      setMenuItems(menuItems);
    }

    fetchMenu();
  }, [])

  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
      <div className="text-gray-200 mr-6">
        {title &&
          <NavLink className="font-semibold text-xl tracking-tight" to="/">
            {title}
          </NavLink>
        }
      </div>
      <div className="block md:hidden">
        <button
          className="px-3 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current text-gray-200 h-6 w-6 hover:text-white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={"w-full md:block md:w-auto " + (isOpen ? "" : "hidden")}>
        <div className="text-sm md:flex-grow">
          {menuItems && menuItems.map((item: any, idx: number) => (
            <NavLink key={idx} className="block mt-4 md:inline-block md:mt-0 md:mx-2 text-gray-200 hover:text-teal-300" to={`/${item.title.toLowerCase() === "home" ? "" : item.title.toLowerCase()}`}>
              {item.title}
            </NavLink>
          ))}
        </div>

      </div>
    </nav >
  );
}

export default Navbar;
