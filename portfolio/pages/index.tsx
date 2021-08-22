import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [hovering, setHovering] = useState<string>();

  return (
    <>
      <Head>
        <title>Portfolio | Albin Groen</title>
        <meta
          content="This portfolio contains products and tools that Albin Groen has designed, built, and marketed throughout the years."
          name="description"
        />

        <title>Portfolio | Albin Groen</title>
        <meta name="title" content="Portfolio | Albin Groen" />
        <meta
          name="description"
          content="This portfolio contains products and tools that Albin Groen has designed, built, and marketed throughout the years."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.albingroen.com" />
        <meta property="og:title" content="Portfolio | Albin Groen" />
        <meta
          property="og:description"
          content="This portfolio contains products and tools that Albin Groen has designed, built, and marketed throughout the years."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/albin-groen/image/upload/v1617307444/portfolio-seo_qayca0.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portfolio.albingroen.com"
        />
        <meta property="twitter:title" content="Portfolio | Albin Groen" />
        <meta
          property="twitter:description"
          content="This portfolio contains products and tools that Albin Groen has designed, built, and marketed throughout the years."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/albin-groen/image/upload/v1617307444/portfolio-seo_qayca0.png"
        />
      </Head>

      <div className="h-screen overflow-auto antialiased text-white bg-gray-800">
        <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-screen p-4 bg-gray-800 border-b border-gray-700 shadow opacity-95">
          <img
            src="https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto,w_100/v1602935502/logo_uws10e.svg"
            alt="Albin Groen logotype"
            className="w-10"
          />

          <a href="mailto:albin.groen@gmail.com">
            <button className="flex items-center px-5 py-2 text-lg font-medium text-white bg-gray-700 rounded transition hover:bg-blue-600">
              <span className="mr-2">&rarr;</span>
              <span>Contact me</span>
            </button>
          </a>
        </nav>

        <main className="px-4 py-10 mt-20">
          <div className="mx-auto max-w-screen-lg">
            <h1 className="text-5xl font-medium">Portfolio</h1>
            <p className="mt-4 text-xl leading-relaxed text-gray-400">
              These are products and tools that I've designed, built and
              marketed myself.
              <br /> I've also worked at Wopify and Dooer, but I can't show much
              of my work there.
            </p>

            <div className="mt-10 grid grid-cols-1">
              <a
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={() => setHovering("narspelsappen")}
                href="https://narspelsappen.albingroen.com"
                className="pb-5 lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "narspelsappen"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/narspelsappen.png)" }}
                >
                  <h2 className="text-4xl font-bold">Närspelsappen</h2>
                  <p className="mt-2 text-lg font-medium text-green-100 truncate">
                    A app for helping golfers get better around the green
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      React Native
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Typescript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Prisma
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Postgres
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={() => setHovering("feedbackfinder")}
                href="https://feedbackfinder.io"
                className="pb-5 lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "feedbackfinder"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/feedbackfinder.png)" }}
                >
                  <h2 className="text-4xl font-bold">Feedback Finder</h2>
                  <p className="mt-2 text-lg font-medium text-green-100 truncate">
                    Phygital service for businesses to collect customer feedback
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Next.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Typescript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Postgres
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Prisma
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={() => setHovering("john")}
                href="https://johnapp.vercel.app"
                className="pb-5 lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "john"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/john.png)" }}
                >
                  <h2 className="text-4xl font-bold">John</h2>
                  <p className="mt-2 text-lg font-medium text-green-100 truncate">
                    Online health tracker website
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Next.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Typescript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      MongoDB
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Auth0
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={() => setHovering("xhr")}
                href="https://xhr.sh"
                className="pb-5 lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "xhr"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/xhr.png)" }}
                >
                  <h2 className="text-4xl font-bold">xhr.sh</h2>
                  <p className="mt-2 text-lg font-medium text-blue-200 truncate">
                    Open XHR request client on the web
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-blue-400 font-semibold text-xs">
                      Next.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-blue-400 font-semibold text-xs">
                      Typescript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-blue-400 font-semibold text-xs">
                      MongoDB
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseOver={() => setHovering("cryptoprices")}
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                href="https://cryptoprices.albingroen.com"
                className="pb-5G lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "cryptoprices"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/cryptoprices.png)" }}
                >
                  <h2 className="text-4xl font-bold">Cryptoprices</h2>
                  <p className="mt-2 text-lg font-medium text-gray-300 truncate">
                    Open app for tracking cryptocurrency prices
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-gray-500 font-semibold text-xs">
                      React.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-gray-500 font-semibold text-xs">
                      TypeScript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-gray-500 font-semibold text-xs">
                      TailwindCSS
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseOver={() => setHovering("keyboardnotes")}
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                href="https://app.keyboardnotes.io"
                className="pb-5G lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "keyboardnotes"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/keyboardnotes.png)" }}
                >
                  <h2 className="text-4xl font-bold">Keyboardnotes</h2>
                  <p className="mt-2 text-lg font-medium text-green-100 truncate">
                    Keyboard-first notes application on the web
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4 overflow-x-auto">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      React.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs whitespace-nowrap">
                      Framer Motion
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      Express
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-green-400 font-semibold text-xs">
                      MongoDB
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                onMouseOver={() => setHovering("referrer")}
                href="https://referrer.sh"
                className="pb-5G lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "referrer"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/referrer.png)" }}
                >
                  <h2 className="text-4xl font-bold">referrer.sh</h2>
                  <p className="mt-2 text-lg font-medium text-indigo-100 truncate">
                    Job candidates website widget
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-300 font-semibold text-xs">
                      React.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-300 font-semibold text-xs">
                      TypeScript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-300 font-semibold text-xs">
                      TailwindCSS
                    </span>
                  </div>
                </div>
              </a>

              <a
                onMouseOver={() => setHovering("secretely")}
                onMouseLeave={() => setHovering(undefined)}
                rel="noopener noreferrer"
                target="_blank"
                href="https://secretely.com"
                className="pb-5G lg:pb-10"
              >
                <div
                  className={`card ${
                    !hovering || hovering === "secretely"
                      ? "opacity-100"
                      : "opacity-50 grayscale"
                  }`}
                  style={{ backgroundImage: "url(/secretely.png)" }}
                >
                  <h2 className="text-4xl font-bold">Secretely</h2>
                  <p className="mt-2 text-lg font-medium text-indigo-100 truncate">
                    Web based password management app
                  </p>
                  <div className="flex items-center space-x-1.5 mt-4">
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-400 font-semibold text-xs">
                      React.js
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-400 font-semibold text-xs">
                      TypeScript
                    </span>
                    <span className="p-0.5 px-2 rounded-full uppercase font-mono tracking-wide border border-indigo-400 font-semibold text-xs">
                      MongoDB
                    </span>
                  </div>
                </div>
              </a>

              <div className="flex items-center justify-center py-12">
                <span className="text-lg tracking-wide text-center text-gray-400">
                  Copyright ©{" "}
                  <a href="https://albingroen.com">
                    <span className="font-medium tracking-normal text-blue-300 hover:underline">
                      Albin Groen
                    </span>
                  </a>{" "}
                  2021
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
