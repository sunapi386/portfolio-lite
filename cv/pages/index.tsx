import Head from "next/head";
import PROJECTS from "../constants/projects.json";

const roles = [
  {
    title: "Full Stack Developer",
    company: "Demando",
    period: "August 2021 - Present",
    about: [
      "Working as a Full Stack Developer on a web recruiting platform built using React.js and Typescript for the frontend, and Node.js, Typescript, GraphQL, and PostgresQL for the backend. Getting familiar with GCP (Google Cloud Platform.) and having the oppurtunity to influence a lot on design and architecture.",
    ],
  },
  {
    title: "Web developer",
    company: "Dooer",
    period: "August 2019 - June 2021",
    about: [
      "Lead frontend development architecture and decision making in an R&D team in fall of 2020. Some of the things I introduced include an organized design system and a new state management tool. This helped peers be more productive and less unsure about what technologies to use.",
      "Developed a new way for potential customers to get a quote directly on our public website. I did this in close collaboration with a senior software engineer. This increased overall sales by about 15%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Wopify",
    period: "January 2018 - July 2019",
    about: [
      "Re-designed the business-facing recruiting application in close contact with stakeholders such as the CEO, CTO, and co-founder.",
      "Architected and constructed a fully functional web application in React.js from the design specification we initially developed, in collaboration with a senior backend engineer.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Albin Groen | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-6 py-24 mx-auto max-w-screen-lg">
        <header className="flex items-center space-x-12">
          <img
            className="object-contain object-bottom rounded-lg w-52 bg-blue-50 dark:bg-gray-600"
            alt="Albin Groen profile"
            src="/profile.png"
          />
          <div>
            <h1 className="text-6xl font-bold">Albin Groen</h1>
            <p className="mt-3 text-3xl font-medium tracking-wider text-gray-400">
              FULL STACK DEVELOPER
            </p>
            <p className="mt-3">
              Email address:{" "}
              <span className="font-semibold dark:font-bold">
                albin.groen@gmail.com
              </span>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <span className="font-semibold dark:font-bold">+46720173749</span>
            </p>
            <p className="mt-1">
              Location:{" "}
              <span className="font-semibold dark:font-bold">
                Västerås, Sweden
              </span>
            </p>
          </div>
        </header>

        <section className="flex items-start mt-8 space-x-20">
          <div className="w-3/5">
            <h2 className="text-3xl font-medium">Work history</h2>

            <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

            {roles.map((role) => (
              <div key={`${role.company}-${role.title}`} className="mt-8">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  {role.title}
                </h3>
                <h4 className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                  {role.company} | {role.period}
                </h4>
                <ul className="flex flex-col pl-5 mt-3 text-lg list-disc space-y-2">
                  {role.about.map((about) => (
                    <li>{about}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-10">
              <h2 className="text-3xl font-medium">Skills</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <p className="mt-6 text-lg">
                I have worked a long time with web development. Starting with
                JavaScript HTML and CSS and learning the communication between
                server and client, and nowadays specializing in frameworks and
                tools like React, TypeScript, GraphQL, design-systems, and state
                management libraries. I have knowledge of a large scale of web
                development tools and services, but can't list them all here, so
                feel free to ask me.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-medium">Achievements</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  1st place Northack hackathon
                </h3>

                <p className="max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  November 2019
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  2nd place OpenHack hackathon
                </h3>

                <p className="max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  November 2018
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  Most improved student diploma
                </h3>

                <p className="max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  June 2018
                </p>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            <h2 className="text-3xl font-medium">Projects</h2>

            <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

            {PROJECTS.map((project) => (
              <div key={project.title} className="mt-8">
                <h3
                  className={`text-xl text-${project.color} dark:text-${project.colorDark} font-bold`}
                >
                  {project.title}
                </h3>
                <p className="max-w-md mt-2">{project.description}</p>
              </div>
            ))}
            <div className="mt-10">
              <h2 className="text-3xl font-medium">Education</h2>

              <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:font-bold">
                  Wijkmanska Highschool
                </h3>

                <p className="max-w-md mt-1 text-lg text-gray-500 dark:text-gray-400">
                  Technical degree | 2015-2018
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
