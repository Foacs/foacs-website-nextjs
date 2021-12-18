import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import Heading1 from "../components/heading1";
import { theme } from "../tailwind.config";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Foacs - Contact</title>
      </Head>
      <Layout>
        <div className="container mx-auto mt-4 min-h-full">
          <Heading1>Contact</Heading1>
          <div className="max-w-2xl mx-auto min-h-full">
            <form className="h-full">
              <div className="flex flex-row items-center ">
                <div className="flex flex-col mx-2 grow">
                  <label
                    htmlFor="mail"
                    className="font-medium after:content-['*'] after:text-red-500 after:font-light after:text-md"
                  >
                    Email
                  </label>
                  <input
                    id="mail"
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    className="border rounded focus:border-green-300 dark:bg-slate-200 dark:text-black"
                  />
                </div>
                <div className="flex flex-col mx-2 grow">
                  <label
                    htmlFor="name"
                    className="font-medium after:content-['*'] after:text-red-500 after:font-light after:text-md"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border rounded dark:bg-slate-200 dark:text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-2 mt-4 h-36  ">
                <label
                  htmlFor="message"
                  className="font-medium after:content-['*'] after:text-red-500 after:font-light after:text-md"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="border rounded grow dark:bg-slate-200 dark:text-black"
                  cols={20}
                ></textarea>
              </div>
              <div
                className="g-recaptcha w-fit mx-auto mt-4"
                data-sitekey="6LeWDKwdAAAAAMktyRVYEmAGSW1ximQmkJq82jh5"
              ></div>
              <div className="flex items-center justify-center">
                <button className="mt-9 font-semibold text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </>
  );
}
