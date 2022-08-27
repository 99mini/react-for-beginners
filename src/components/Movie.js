import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, movieNm, rank, audiAcc }) {
  return (
    <div>
      <p>
        {rank} 위 {audiAcc} 명
      </p>
      <h2>
        <Link to={`/movie/${id}`}>{movieNm}</Link>
      </h2>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  audiAcc: PropTypes.string.isRequired,
};

export default Movie;
