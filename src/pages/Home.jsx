import HeroImage from "../components/HeroImage";
import NavbarComponent from "../components/NavbarComponent";
import CardList from "../components/CardList";

function Home() {
  document.title = `Home | Dumbflix`;

  return (
    <>
      <NavbarComponent />
      <HeroImage
        image="/assets/images/hero/thewitcher.png"
        titleimage="/assets/images/hero/thewitcher-title.png"
        titlesize="400px"
        desc="Geralt of Rivia, a solitary monster hunter, struggles to find his place in
        a world where people often prove more wicked than beast."
        year="2019"
        category="TV Series"
        watch="/detail/13"
      />
      <div className="py-3" style={{ backgroundColor: "black" }}></div>
      {/* <h5>Tv Series</h5> */}
      <CardList title="TV Series" category="tv-series" limit={6} />
      {/* <h5>Movies</h5> */}
      {/* <CardList title="Movies" category="movies" limit={6} /> */}
    </>
  );
}

export default Home;
