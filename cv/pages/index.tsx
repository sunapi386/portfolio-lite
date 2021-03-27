import Head from "next/head";
import PROJECTS from "../constants/projects.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Albin Groen | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-lg mx-auto py-24 px-6">
        <header className="flex flex-col lg:flex-row text-center lg:text-left items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <img
            className="w-52 rounded-lg bg-blue-50 dark:bg-gray-600 object-contain object-bottom"
            alt="Albin Groen profile"
            src="/profile.png"
          />
          <div>
            <h1 className="text-6xl font-bold">Albin Groen</h1>
            <p className="font-medium mt-3 text-3xl tracking-wider text-gray-400">
              WEB ENGINEER
            </p>
            <p className="mt-3">
              Email address:{" "}
              <span className="font-bold">albin.groen@gmail.com</span>
            </p>
            <p className="mt-1">
              Phone: <span className="font-bold">+46720173749</span>
            </p>
            <p className="mt-1">
              Location: <span className="font-bold">Västerås, Sweden</span>
            </p>
          </div>
        </header>

        <section className="flex flex-col lg:flex-row items-start space-y-10 md:space-x-24 md:space-y-0 mt-8">
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-medium">Projects</h2>

            <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

            {PROJECTS.map((project) => (
              <div key={project.title} className="mt-8">
                <h3
                  className={`text-2xl text-${project.color} dark:text-${project.colorDark} font-bold`}
                >
                  {project.title}
                </h3>
                <p className="max-w-lg lg:max-w-md mt-2 text-lg">
                  {project.description}
                </p>
              </div>
            ))}

            <div className="mt-10">
              <h2 className="text-3xl font-medium">Achievements</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  1st place Northack hackathon
                </h3>

                <p className="lg:max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  November 2019
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  2nd place OpenHack hackathon
                </h3>

                <p className="lg:max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  November 2018
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  Most improved student diploma
                </h3>

                <p className="lg:max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  June 2018
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-3xl font-medium">Work history</h2>

            <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

            <div className="mt-8">
              <h3 className="text-2xl font-semibold dark:font-bold">
                Web developer
              </h3>
              <h4 className="mt-2 font-medium dark:text-gray-400 text-gray-500">
                Dooer | August 2019 - present
              </h4>
              <ul className="list-disc pl-5 mt-3 flex flex-col space-y-2 text-lg">
                <li>
                  Lead frontend development architecture and decision making in
                  a R&D team in fall of 2020. Some of the things I introduced
                  include a organized design system and new state management
                  tool. This helped peers be more productive and less unsure
                  about what technologies to use.
                </li>
                <li>
                  Developed a new way for potentical customers to get a quota
                  directly on our public website. I did this in close
                  collaboration with a senior software engineer. This increased
                  overall sales with 15%.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold dark:font-bold">
                Fullstack developer
              </h3>
              <h4 className="mt-2 font-medium dark:text-gray-400 text-gray-500">
                Wopify | January 2018 - July 2019
              </h4>
              <ul className="list-disc pl-5 mt-3 flex flex-col space-y-2 text-lg">
                <li>
                  Re-designed the business facing recruiting application in
                  close contact with stakeholders such as CEO, CTO and
                  co-founder.
                </li>
                <li>
                  Architected and constructed a fully functional web application
                  in React.js from the design specification we initially
                  developed, in collaboration with a senior backend engineer.
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-medium">Education</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  Wijkmanska Highschool
                </h3>

                <p className="lg:max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  Technical degree | 2015-2018
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-medium">Skills</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <p className="text-lg mt-6">
                I have worked a long time with web development. Starting with
                JavaScript HTML and CSS and learning the communication between
                server and client, and nowadays specializing in frameworks and
                tools like React, TypeScript, GraphQL, design-systems and state
                management libraries. I have knowledge with a large scale of web
                development tools and services, but can't list them all here, so
                feel free to ask me.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
