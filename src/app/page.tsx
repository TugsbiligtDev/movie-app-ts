import Hero from "../../components/Hero";
import Popular from "../../components/Popular";
import Top from "../../components/Top";
import Upcoming from "../../components/Upcoming";
import Navigation from "../../components/Navigation";
import Separation from "../../components/Separation";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Dropdown />
      <main className="pb-12">
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Separation text="Upcoming" />
          <Upcoming />
          <Separation text="Popular" />
          <Popular />
          <Separation text="Top Rated" />
          <Top />
        </div>
      </main>
      <Footer />
    </div>
  );
}
