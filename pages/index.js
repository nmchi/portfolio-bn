import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/Abouts/AboutSection"
import Projects from "../components/ProjectSection/Projects"
import NavBar from "../components/NavBar/NavBar";
import EmailTemplate from "../components/SendMail/EmailTemplate";

const Page = () => (
    <div className="bg-primary-black">
        <NavBar />
        <div className='overflow-hidden'>
            <HeroSection />
            <div className="relative">
                <AboutSection />
                <div className='gradient-02 z-0' />
            </div>
            <div className="relative">
                <div className='gradient-03 z-0' />
                <Projects />
            </div>
            <div className="relative">
                <EmailTemplate />
                <div className='gradient-04 z-0' />
            </div>
            <Footer />
        </div>
    </div>
);

export default Page;
