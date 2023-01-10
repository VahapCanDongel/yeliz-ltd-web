import Navigation from "../components/Navigation"
import Welcome from "../components/Welcome";
import Widget from "../components/Widget";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"

export default function Home(){
    return(
        <div className="w-full">
            <Navigation/>
            <Welcome></Welcome>
            <Widget></Widget>
            <Section></Section>
            <Testimonials ></Testimonials>
            <Footer></Footer>
        </div>
    )
}