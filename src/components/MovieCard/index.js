import { useNavigate } from "react-router-dom";
import { toDate } from "../../helpers/toDate";
import noImg from "../../assets/noimg.png";
import { toUrl } from "../../helpers/toUrl";

const MovieCard = ({ imgUrl, name, date, id }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => {
      navigate(`/movie/${id}`)
    }}>
      <img
        className="movie-card-img"
        src={imgUrl ? toUrl(imgUrl) : noImg}
        alt={name}
      />
      <span className="movie-card-name">
        <strong>{name}</strong>
      </span>
      {date ? <span className="movie-card-date">{toDate(date)}</span> : null}
    </div>
  );
};

export default MovieCard;
