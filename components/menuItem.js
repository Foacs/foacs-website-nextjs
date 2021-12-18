import Link from "next/link";

export default function MenuItem({ children, href }) {
  return (
    <Link href={href}>
      <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-green-700 dark:hover:text-green-200">
        {children}
      </a>
    </Link>
  );
}
