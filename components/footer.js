import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="px-3 py-8 w-full mt-auto bg-white dark:bg-gray-800 shadow-lg text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
        <div className="flex flex-col">
          <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full" />
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav className="flex-1 flex flex-row md:flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
              <Link href="/sitemap.xml">
                <a
                  aria-current="page"
                  className="hover:text-green-700 dark:hover:text-green-200 my-1"
                >
                  Sitemap
                </a>
              </Link>
              <Link href="/contact">
                <a
                  aria-current="page"
                  className="hover:text-green-700 dark:hover:text-green-200 my-1 mx-3 md:mx-0"
                >
                  Contact
                </a>
              </Link>
              <Link href="/cgu">
                <a
                  aria-current="page"
                  className="hover:text-green-700 dark:hover:text-green-200 w-12 my-1 text-right"
                >
                  CGU
                </a>
              </Link>
            </nav>
            <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
              <Link href="https://github.com/Foacs">
                <a
                  className="hover:text-primary-gray-20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-xl hover:text-green-700 dark:hover:text-green-200 transition-colors duration-200"
                  >
                    <path d="M12,2 C6.475,2 2,6.475 2,12 C2,16.425 4.8625,20.1625 8.8375,21.4875 C9.3375,21.575 9.525,21.275 9.525,21.0125 C9.525,20.775 9.5125,19.9875 9.5125,19.15 C7,19.6125 6.35,18.5375 6.15,17.975 C6.0375,17.6875 5.55,16.8 5.125,16.5625 C4.775,16.375 4.275,15.9125 5.1125,15.9 C5.9,15.8875 6.4625,16.625 6.65,16.925 C7.55,18.4375 8.9875,18.0125 9.5625,17.75 C9.65,17.1 9.9125,16.6625 10.2,16.4125 C7.975,16.1625 5.65,15.3 5.65,11.475 C5.65,10.3875 6.0375,9.4875 6.675,8.7875 C6.575,8.5375 6.225,7.5125 6.775,6.1375 C6.775,6.1375 7.6125,5.875 9.525,7.1625 C10.325,6.9375 11.175,6.825 12.025,6.825 C12.875,6.825 13.725,6.9375 14.525,7.1625 C16.4375,5.8625 17.275,6.1375 17.275,6.1375 C17.825,7.5125 17.475,8.5375 17.375,8.7875 C18.0125,9.4875 18.4,10.375 18.4,11.475 C18.4,15.3125 16.0625,16.1625 13.8375,16.4125 C14.2,16.725 14.5125,17.325 14.5125,18.2625 C14.5125,19.6 14.5,20.675 14.5,21.0125 C14.5,21.275 14.6875,21.5875 15.1875,21.4875 C19.1375,20.1625 22,16.4125 22,12 C22,6.475 17.525,2 12,2 L12,2 Z"></path>
                  </svg>
                </a>
              </Link>
              <Link href="https://discord.gg/VWX9pybWvT">
                <a
                  className="ml-4 hover:text-primary-gray-20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="-1 0 20 20"
                    className="text-xl hover:text-green-700 dark:hover:text-green-200 transition-colors duration-200"
                  >
                    <path d="M15.45,0 C16.5684694,0 17.4812026,0.901320283 17.4997134,2.02517151 L17.5,2.06 L17.5,20 L15.35,18.1 L14.14,16.98 L12.86,15.79 L13.39,17.64 L2.05,17.64 C0.931530612,17.64 0.0187973761,16.7386797 0.000286625896,15.6148285 L0,15.58 L0,2.06 C0,0.931632653 0.901320283,0.0187984173 2.01547452,0.00028663652 L2.05,0 L15.45,0 Z M7.32,4.78 L7.22,4.6599169 L7.1630624,4.66059412 C6.890192,4.66871965 5.6772,4.7596 4.41,5.71 L4.36156128,5.802081 C4.110624,6.291581 2.97,8.6742 2.97,11.54 L2.99079837,11.5731719 C3.132297,11.789822 4.0089,12.9963 6.02,13.06 L6.31452473,12.6987136 C6.43107266,12.5548097 6.56647059,12.3864706 6.69,12.23 C5.5242617,11.8811964 5.02413637,11.1785226 4.94987673,11.0655003 L4.94,11.05 L4.98113281,11.0774219 C5.02625,11.1067188 5.1075,11.1575 5.22,11.22 C5.23,11.23 5.24,11.24 5.26,11.25 C5.29,11.27 5.32,11.28 5.35,11.3 C5.6,11.44 5.85,11.55 6.08,11.64 C6.49,11.8 6.98,11.96 7.55,12.07 C8.27857143,12.206 9.12982041,12.2570694 10.0579114,12.0948686 L10.14,12.08 C10.61,12 11.09,11.86 11.59,11.65 C11.94,11.52 12.33,11.33 12.74,11.06 L12.7236045,11.0849198 C12.6278835,11.2248395 12.1044828,11.9182759 10.93,12.25 L11.0953826,12.4572606 C11.347936,12.770868 11.59,13.06 11.59,13.06 C13.8,12.99 14.65,11.54 14.65,11.54 C14.65,8.32 13.21,5.71 13.21,5.71 C11.9716,4.7812 10.784972,4.67329454 10.4769888,4.66128549 L10.4,4.6599169 L10.26,4.82 C11.7675403,5.28112997 12.5594623,5.92313048 12.7194499,6.06258405 L12.75,6.09 C11.71,5.52 10.69,5.24 9.74,5.13 C9.02,5.05 8.33,5.07 7.72,5.15 C7.66,5.15 7.61,5.16 7.55,5.17 L7.493785,5.17528 C7.11445,5.21385 6.2965,5.3535 5.28,5.8 L5.13470143,5.86775227 C4.9530442,5.9537305 4.82068394,6.02127593 4.74962341,6.05838585 L4.69,6.09 C4.69,6.09 5.503483,5.315721 7.26629086,4.79567994 L7.32,4.78 Z M6.94,8.39 C7.51,8.39 7.97,8.89 7.96,9.5 C7.96,10.11 7.51,10.61 6.94,10.61 C6.38,10.61 5.92,10.11 5.92,9.5 C5.92,8.89 6.37,8.39 6.94,8.39 Z M10.59,8.39 C11.16,8.39 11.61,8.89 11.61,9.5 C11.61,10.11 11.16,10.61 10.59,10.61 C10.03,10.61 9.57,10.11 9.57,9.5 C9.57,8.89 10.02,8.39 10.59,8.39 Z" />
                  </svg>
                </a>
              </Link>
            </div>
            <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
              <span>Copyright © 2021 Foacs.</span>
              <span className="mt-7 md:mt-1">
                Icones faites par{" "}
                <a
                  href="https://www.freepik.com"
                  hrefLang="en"
                  rel="noreferrer"
                  target="_blank"
                  title="Freepik"
                  className="hover:text-green-700 dark:hover:text-green-200"
                >
                  Freepik
                </a>{" "}
                de{" "}
                <a
                  href="https://www.flaticon.com/"
                  hrefLang="en"
                  rel="noreferrer"
                  target="_blank"
                  title="Flaticon"
                  className="hover:text-green-700 dark:hover:text-green-200"
                >
                  www.flaticon.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
