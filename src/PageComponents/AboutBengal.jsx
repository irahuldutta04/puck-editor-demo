export const AboutBengal = ({
  topText,
  bottomText,
  priority,
  governorImage,
  governorName,
  chiefMinisterImage,
  chiefMinisterName,
}) => {
  return (
    <>
      <div className=" aboutBengal  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="oldAboutBengal gap-8">
          <div className="oldAboutBengal-Header">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">{topText}</h2>
            <p className="text-zinc-600 text-base">{bottomText}</p>
          </div>
          <div className="old-about-bengal-cards">
            {priority === "default" ? (
              <>
                <div className="old-about-bengal-card flex flex-col items-center">
                  <img
                    src={governorImage}
                    alt="Governor"
                    className="rounded-full mb-4"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                    MEET THE GOVERNOR
                  </h3>
                  <p className="text-zinc-600 mb-4">{governorName}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    KNOW MORE
                  </button>
                </div>

                <div className="old-about-bengal-card flex flex-col items-center">
                  <img
                    src={chiefMinisterImage}
                    alt="Chief Minister"
                    className="rounded-full mb-4"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                    MEET THE CHIEF MINISTER
                  </h3>
                  <p className="text-zinc-600 mb-4">{chiefMinisterName}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    KNOW MORE
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="old-about-bengal-card flex flex-col items-center">
                  <img
                    src={chiefMinisterImage}
                    alt="Chief Minister"
                    className="rounded-full mb-4"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                    MEET THE CHIEF MINISTER
                  </h3>
                  <p className="text-zinc-600 mb-4">{chiefMinisterName}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    KNOW MORE
                  </button>
                </div>

                <div className="old-about-bengal-card flex flex-col items-center">
                  <img
                    src={governorImage}
                    alt="Governor"
                    className="rounded-full mb-4"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                    MEET THE GOVERNOR
                  </h3>
                  <p className="text-zinc-600 mb-4">{governorName}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    KNOW MORE
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
