import Image from "next/image";
import Link from "next/link";

export default function Card({ children, root, id, name, desc }) {
  return (
    <Link href={`/${root}/${id}`}>
      <a>
        <div className=" w-full max-w-sm mx-auto rounded dark:bg-gray-800 hover:shadow-xl shadow-md">
          <div className="flex flex-col items-center h-56 pt-6 w-full bg-cover">
            <Image
              src={`/images/${id}.svg`}
              alt={`${name} icon`}
              width={120}
              height={120}
              layout="fixed"
            />
            <div className="flex items-end grow w-full">
              <div className="px-5 py-3">
                <h3 className="text-gray-700 dark:text-gray-300 uppercase">
                  {name}
                </h3>
                <span className="text-gray-500 dark:text-gray-50 mt-2">
                  {desc}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
