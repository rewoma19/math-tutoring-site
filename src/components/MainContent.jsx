import HeroSection from "./HeroSection";

function MainContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
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
