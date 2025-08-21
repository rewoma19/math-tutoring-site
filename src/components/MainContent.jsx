import { teaching } from "../data/teaching";
import HeroSection from "./HeroSection";
import TeachingCard from "./TeachingCard";

function MainContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <section
        id="maths"
        className="bg-slate-950 text-white  px-8 py-16 sm:py-20 md:py-24"
      >
        <div className="w-full mx-auto max-w-[1000px] flex flex-col gap-8">
          <p className="tag rank rounded-full px-4 py-2 text-center mx-auto">
            from catch up to acceleration
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="text-6xl sm:text-7xl md:text-8xl mx-auto text-center text-white">
              What I Teach
            </h3>
            <p className="text-center mx-auto">
              I have the experience to teach you what you need to know
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 my-10">
            {teaching.map((card) => {
              return (
                <TeachingCard focus={card.focus} benefits={card.benefits} />
              );
            })}
          </div>
          <button className="w-fit mx-auto rounded-full px-8 py-4 card-button-secondary text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
            Book a session
          </button>
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
