function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 max-w-[1000px] mx-auto w-full"
    >
      <div className="text-center font-medium flex flex-col items-center gap-2">
        <h2 className="text-6xl sm:text-7xl md:text-8xl">
          Achievement Into Excellence
        </h2>
        <h4 className="text-4xl sm:text-5xl md:text-6xl">and beyond</h4>
      </div>
      <p className="text-center max-w-[600px] w-full mx-auto">
        <span className="font-semibold">
          Book a one-on-one private maths lesson
        </span>{" "}
        with James, a qualified Engineer and Math Teacher with over 13 years of
        tutoring experience.
      </p>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="tag rank px-2 py-0.5 sm:py-1.5 rounded-full sm:text-lg md:text-xl">
          NCEA IB & Cambridge
        </div>
        <div className="tag rank px-2 py-0.5 sm:py-1.5 rounded-full sm:text-lg md:text-xl">
          Years 5 - 13
        </div>
        <div className="tag rank px-2 py-0.5 sm:py-1.5 rounded-full sm:text-lg md:text-xl">
          In-person & Online
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-fit mx-auto my-4">
        <button className="card-button-secondary px-4 py-2 rounded-full text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
          What I teach
        </button>
        <button className="card-button-primary px-4 py-2 rounded-full text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
          Book a session
        </button>
      </div>
      <div className="w-fit mx-auto my-4 flex flex-col items-center gap-4">
        <p className="indie text-slate-600">Scroll for more</p>
        <div className="w-0.5 h-[100px] rounded-lg bg-linear-to-b from-slate-400 to-transparent"></div>
      </div>
    </section>
  );
}

export default HeroSection;
