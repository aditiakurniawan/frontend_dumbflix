import CardList from "../components/CardList";
import HeroImage from "../components/HeroImage";
import NavbarComponent from "../components/NavbarComponent";

function TVSeries() {
  document.title = `TV Series | Dumbflix`;

  return (
    <>
      <NavbarComponent />
      <HeroImage
        image="/assets/images/hero/lacasadepapel.png"
        titleimage="/assets/images/hero/lacasadepapel-title.png"
        titlesize="400px"
        desc="Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
        year="2017"
        category="TV Series"
        watch="/detail/16"
      />
      <h5>Tv Series</h5>
      <CardList title="TV Series" category="tv-series" limit={12} />
    </>
  );
}

export default TVSeries;
