import Head from "next/head";
import PROJECTS from "../constants/projects.json";
import {FaLinkedin} from "react-icons/fa/index";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Sun | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-6 py-24 mx-auto max-w-screen-lg">
        <header className="flex items-center space-x-12">
          <img
            className="object-contain object-bottom rounded-lg w-52 bg-blue-50 dark:bg-gray-600"
            alt="Jason Sun profile"
            src="/profile.jpeg"
          />
          <div>
            <h1 className="text-6xl font-bold">Jason Sun</h1>
            <p className="mt-3 text-xl font-medium tracking-wider text-gray-400">
              Crypto Blockchain & Robotics and Fullstack Engineer
            </p>

            <p className="mt-2">
              <a href="https://linkedin.com/in/sunapi386">
                LinkedIn
              </a>
            </p>

            <p className="mt-2">
              <a href="https://github.com/sunapi386">
                GitHub
              </a>
            </p>

            <p className="mt-2">
              <a href="https://roampool.com/">
                ROAM Stakepool
              </a>
            </p>

            <p className="mt-2">
              <a href="mailto:sunapi386@gmail.com">sunapi386@gmail.com</a>
            </p>

          </div>
        </header>

        <section className="flex items-start mt-8 space-x-20">
          <div className="mt-10">
            <h2 className="text-3xl font-medium">Profile</h2>

            <hr className="mt-4 dark:opacity-25 dark:border-dashed" />

            <p className="mt-6 text-lg">
              A generalist with expertise in a wide range of software stacks, leading cross team efforts to design and integrate multiple tech stacks to form new features in an architect role.
            </p>

            <p className="mt-6 text-lg">

            </p>

            <ul className="flex flex-col pl-5 mt-3 text-lg list-disc space-y-2">
              <li> Cryptocurrency stake pool operator, NFT minter, blockchain developer. </li>
              <li>Complete product development lifecycle experience from conception to prototype to end of life. </li>
              <li>Create feature designs proposals, break down and delegate components to cross function teams. </li>
              <li>Developer since 2004 using Slackware Linux and Arch Linux. </li>
              <li>Experience in fast paced startup culture and large corporation. </li>
              <li>Experience in leading projects, management, leading cross functional teams, building org-wide processes. </li>
              <li>Experience in real time systems, full stack web, full stack robotics, cryptocurrency blockchain.</li>
              <li>Mentor and manage engineers/interns, and interview candidates. </li>
              <li>Wide software stack expertise, architect function, lead design & integration for multiple tech stacks. </li>
            </ul>


          </div>


        </section>
      </div>
    </>
  );
}
