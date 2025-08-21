function Header() {
  return (
    <header className="p-8">
      <div className="flex items-center justify-between gap-8 max-w-[1000px] mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Auckland Maths Tutoring
        </h1>
        <button className="card-button-secondary px-4 py-2 rounded-full whitespace-nowrap opacity-0 pointer-events-none">
          Book a session
        </button>
        <div className="fixed top-8 right-8">
          <button className="card-button-secondary px-4 py-2 rounded-full whitespace-nowrap">
            Book a session
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
