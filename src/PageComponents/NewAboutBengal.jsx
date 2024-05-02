export const NewAboutBengal = ({
  topText,
  bottomText,
  priority,
  governorImage,
  governorName,
  chiefMinisterImage,
  chiefMinisterName
}) => {
  return (
    <>
      <div className="max-w-7xl aboutBengal  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{topText}</h1>
        <p className="text-lg text-zinc-700 mb-10">{bottomText}</p>
        <div className="flex md:flex-row justify-center gap-8">
          {priority === "default" && (
            <>
              <div className="text-center">
                <img
                  src={governorImage}
                  alt="Governor"
                  className="mx-auto rounded-full mb-4"
                  width={150}
                  height={150}
                />
                <h2 className="text-xl font-semibold">MEET THE GOVERNOR</h2>
                <p className="font-medium text-zinc-800">{governorName}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  KNOW MORE
                </button>
              </div>
              <div className="text-center">
                <img
                  src={chiefMinisterImage}
                  alt="Chief Minister"
                  className="mx-auto rounded-full mb-4"
                  width={150}
                  height={150}
                />
                <h2 className="text-xl font-semibold">
                  MEET THE CHIEF MINISTER
                </h2>
                <p className="font-medium text-zinc-800">{chiefMinisterName}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  KNOW MORE
                </button>
              </div>
            </>
          )}
          {priority === "reverse" && (
            <>
              <div className="text-center">
                <img
                  src={chiefMinisterImage}
                  alt="Chief Minister"
                  className="mx-auto rounded-full mb-4"
                  width={150}
                  height={150}
                />
                <h2 className="text-xl font-semibold">
                  MEET THE CHIEF MINISTER
                </h2>
                <p className="font-medium text-zinc-800">{chiefMinisterName}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  KNOW MORE
                </button>
              </div>
              <div className="text-center">
                <img
                  src={governorImage}
                  alt="Governor"
                  className="mx-auto rounded-full mb-4"
                  width={150}
                  height={150}
                />
                <h2 className="text-xl font-semibold">MEET THE GOVERNOR</h2>
                <p className="font-medium text-zinc-800">{governorName}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  KNOW MORE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
