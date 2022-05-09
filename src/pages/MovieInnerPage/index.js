import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";

const MovieInnerPage = () => {
  const { movieId } = useParams();

  return <PageContainer>{movieId}</PageContainer>;
};

export default MovieInnerPage;
