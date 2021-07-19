import Seo from "../components/Seo";

const images = [
  ["/grafitti-3-done.png", "/grafitti-3-sketch.png"],
  ["/grafitti-2-done.png", "/grafitti-2-sketch.png"],
  ["/grafitti-1-done.png", "/grafitti-1-sketch.png"],
];

const imageStyle =
  "object-cover object-center w-full transition hover:opacity-50";

export default function Home() {
  return (
    <>
      <Seo
        description="A place where I post some of my drawings and more artsy content."
        keywords={["grafitti", "art", "design"]}
        url="https://art.albingroen.com"
        title="Art | Albin Groen"
      />

      <div>
        <div className="px-6 py-12 mx-auto max-w-screen-lg">
          <div className="flex items-center justify-between">
            <a href="/">
              <img
                src="https://res.cloudinary.com/albin-groen/image/upload/v1602935502/logo_uws10e.svg"
                alt="Albin Groen logotype"
                className="w-10"
              />
            </a>

            <a
              className="text-blue-500 hover:underline"
              href="https://albingroen.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit my website &rarr;
            </a>
          </div>

          <div className="flex flex-col divide-y divide-dashed">
            {images.map((_) => (
              <div key={_[0]} className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {_.map((__) => (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={__}
                      key={__}
                    >
                      <img className={imageStyle} src={__} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-lg text-center text-gray-500">
            Albin Groen 2021 ©
          </p>
        </div>
      </div>
    </>
  );
}
