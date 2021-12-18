import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import cn from "classnames";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <div
      className={cn({
        dark: false,
      })}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Foacs est une association de droit, ayant pour objectif de promouvoir le développement d'application open source."
        />
      </Head>
      <div className="flex flex-col h-screen">
        <Menu theme={theme} switchTheme={switchTheme} />
        <main className="dark:bg-slate-600 grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
