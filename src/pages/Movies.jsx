import CardList from "../components/CardList";
import HeroImage from "../components/HeroImage";
import NavbarComponent from "../components/NavbarComponent";

function Movies() {
  document.title = `Movies | Dumbflix`;

  return (
    <>
      <NavbarComponent />
      <HeroImage
        image="/assets/images/hero/joker.png"
        titleimage="/assets/images/hero/joker-title.png"
        titlesize="150px"
        desc="In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
        year="2019"
        category="Movies"
        watch="/detail/4"
      />
      <h5>Movies</h5>
      <CardList title="Movies" category="movies" limit={12} />
    </>
  );
}

export default Movies;
