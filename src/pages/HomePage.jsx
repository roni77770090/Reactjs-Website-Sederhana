import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

import { HomeSection } from "../data/HomeSection";
import { CoursesSection } from "../data/CoursesSection";
import { TutorsSection, tutorsList } from "../data/TutorsSection";
import { PartnersSection, partnersList } from "../data/PartnersSection";
import { ContactSection } from "../data/ContactSection";


import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";


import parse from 'html-react-parser'

import '../Styles/Home.css'
function Home() {
  return (
    <>


      <Navbar />
      <div className="wrapper">
        {/* <!-- home --> */}
        <section id="home">
          <img src={HomeSection.image} />
          <div className="kolom">
            {parse(HomeSection.content)}
          </div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">
            {parse(CoursesSection.content)}
          </div>
          <img src={CoursesSection.image} />
        </section>
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parse(TutorsSection.content)}
            </div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {parse(PartnersSection.content)}
            </div>
            <Partners partnersList={partnersList}/>
          </div>
        </section>
      </div>
      <Contact ContactSection={ContactSection}/>
      <Footer />
    </>
  );
}

export default Home;