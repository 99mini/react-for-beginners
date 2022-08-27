import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, movieCd, movieNm, rank, audiAcc }) {
  return (
    <div>
      <div key={movieCd}>
        <p>
          {rank} 위 {audiAcc} 명
        </p>
        <h2>
          <Link to={`/movie/${id}`}>{movieNm}</Link>
        </h2>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.string.isRequired,
  movieCd: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  audiAcc: PropTypes.string.isRequired,
};

export default Movie;
