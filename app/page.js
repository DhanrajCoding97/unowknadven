import About from "./components/About";
import Contact from "./components/Contact";
import CustomerReviews from "./components/CustomerReviews";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Services/>
      {/* <CustomerReviews /> */}
      <Contact />
    </main>
  )
}
