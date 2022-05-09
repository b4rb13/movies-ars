import PageContainer from "../../components/PageContainer";
import MovieList from "../../components/MovieList";
import { movies } from "../../mock/movies";

const Home = () => {
  return (
    <PageContainer>
      <MovieList title={"Home"} list={movies.results} />
    </PageContainer>
  );
};

export default Home;
