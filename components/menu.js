import Link from "next/link";
import cn from "classnames";
import { darkMode } from "../tailwind.config";
import Layout from "./layout";
import MenuItem from "./menuItem";

export default function Menu({ theme, switchTheme }) {
  return (
    <header className="sticky top-0">
      <nav className="flex flex-wrap bg-white dark:bg-gray-800 shadow-lg items-center justify-between p-4 text-2  text-gray-800 dark:text-gray-200">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <Link href="/">
            <a className="text-xl  font-semibold font-heading hover:text-green-700 dark:hover:text-green-200">
              Foacs
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <MenuItem href="/">Accueil</MenuItem>
          <MenuItem href="/projects">Projets</MenuItem>
          <MenuItem href="/knowledge">Connaissances</MenuItem>
          <MenuItem href="/members">Membres</MenuItem>
          <MenuItem href="/about">À propos</MenuItem>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <div className="block lg:inline-block mt-4 lg:mt-0 mr-10">
            <svg
              className="inline-block w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <label className="inline-block h-6">
              <input
                className="hidden peer"
                onClick={switchTheme}
                type="checkbox"
                defaultChecked={theme === "dark"}
              />
              <span
                className="w-8 h-5 flex items-center flex-shrink-0 mx-1 p-1 bg-gray-300 rounded-full 
            after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md
            peer-checked:bg-green-400 duration-300 ease-in-out after:duration-300 peer-checked:after:translate-x-2 cursor-pointer"
              ></span>
            </label>

            <svg
              className="inline-block w-5 h-4 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </div>

          <MenuItem href="/login">Profile</MenuItem>
        </div>
      </nav>
    </header>
  );
}
