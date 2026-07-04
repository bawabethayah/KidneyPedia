import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import TopicCards from "../components/TopicCards";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureCards />
      <TopicCards />
      <Statistics />
      <Footer />
    </main>
  );
}
