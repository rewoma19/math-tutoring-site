function MainContent() {
  return (
    <main className="flex flex-col">
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
          with James, a qualified Engineer and Math Teacher with over 13 years
          of tutoring experience.
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
      <section id="maths">
        <div>
          <p>from catch up to acceleration</p>
          <div>
            <h3>What I Teach</h3>
            <p>I have the experience to teach you what you need to know</p>
          </div>
          <div>
            <div>
              <h4>NCEA</h4>
              <p>&rarr; Personalized support for Levels 1, 2, and 3</p>
              <p>&rarr; Focus on internal assessments, exams, and credits</p>
              <p>
                &rarr; Assistance with problem-solving techniques and past exam
                papers
              </p>
              <p>&rarr; Guidance on achieving Merit and Excellence standards</p>
            </div>
            <div>
              <h4>International Baccalaureate</h4>
              <p>&rarr; Help with SL and HL maths curriculum</p>
              <p>
                &rarr; Tailored guidance for Internal Assessments (IA) and exam
                preparation
              </p>
              <p>
                &rarr; In-depth support for core concepts and optional topics
              </p>
              <p>
                &rarr; Effective strategies for high achievement in assessments
              </p>
            </div>
            <div>
              <h4>Cambridge</h4>
              <p>&rarr; Tutoring for IGCSE, AS, and A-Level maths</p>
              <p>&rarr; Expert help with structured revision for exams</p>
              <p>
                &rarr; Targeted support for past papers, exam techniques, and
                challenging topics
              </p>
              <p>
                &rarr; Focus on problem-solving, reasoning, and conceptual
                understanding
              </p>
            </div>
            <div>
              <h4>General</h4>
              <p>&rarr; Foundational maths support for all age groups</p>
              <p>
                &rarr; Build confidence in basic arithmetic, algebra, and
                geometry
              </p>
              <p>
                &rarr; Personalized learning pace and flexible tutoring plans
              </p>
              <p>
                &rarr; Focus on improving problem-solving and critical thinking
                skills
              </p>
              <p>
                &rarr; Preparation for general school exams and continuous
                assessment
              </p>
            </div>
          </div>
          <button>Book a session</button>
        </div>
      </section>
      <section id="reviews">
        <p>Stories of Success</p>
        <div>
          <h3>What Students Say</h3>
          <p>See what my students say about our classes</p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <p>Pierre</p>
                <p>Student</p>
              </div>
              <p>
                Algebra was really hard for me, and I was falling behind. But my
                tutor goes over everything slowly and doesn&apos;t make me feel
                dumb for asking questions. Now I actually understand what&apos;s
                going on in class, and my grades are getting better too.
              </p>
            </div>
            <div>
              <div>
                <p>Danielle</p>
                <p>Student</p>
              </div>
              <p>
                As someone who hasn&apos;t enjoyed maths before, James made it
                feel much easier and helped me make sense of what I am learning
                in class. Thanks James.
              </p>
            </div>
            <div>
              <div>
                <p>India</p>
                <p>Student</p>
              </div>
              <p>
                I needed help with maths because I don&apos;t like my teachers
                but I didn&apos;t want to fail my final year exams. James really
                knew how to explain things in a way that I could understand and
                I ended up doing better than expected :D
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>Olivia (Parent)</p>
                <p>Student</p>
              </div>
              <p>
                I wanted to find a tutor who could help advance my daughters
                mathematics ability beyond her current age level and stimulate
                her with more challenging material. James did an excellent job
                of helping Olivia to build her enthusiam and ability in Maths.
              </p>
            </div>
            <div>
              <div>
                <p>Douglas</p>
                <p>Student</p>
              </div>
              <p>
                I felt that school was starting to get more challenging and I
                was unable to pass all my exams without some extra assistance.
                My sessions with Bridget were very supportive and enjoyable and
                it helped make completing all my homework and studying super
                easy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <p>Book Today</p>
        <p>Send Me a message</p>
        <h3>+64 21 42 24 833</h3>
      </section>
    </main>
  );
}

export default MainContent;
