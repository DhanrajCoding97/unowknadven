import About from "./components/About";
import CustomerReviews from "./components/CustomerReviews";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <CustomerReviews />
    </main>
  )
}
