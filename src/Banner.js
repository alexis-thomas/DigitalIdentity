import { Link } from "react-router-dom";

// simple React function for banner
function Banner(props) {
  return (
    <div className="Banner">
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={() => props.close()}
      >
        <div className="banner-button">Bio</div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/resume"
        onClick={() => props.close()}
      >
        <div className="banner-button">Resume</div>
      </Link>
      <div className="banner-button">
        <Link
          style={{ textDecoration: "none" }}
          to="/research"
          onClick={() => props.close()}
        >
          Research & teaching
        </Link>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to="/awards"
        onClick={() => props.close()}
      >
        <div className="banner-button">Awards</div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/contact"
        onClick={() => props.close()}
      >
        <div className="banner-button">Contact</div>
      </Link>
    </div>
  );
}
export default Banner;
