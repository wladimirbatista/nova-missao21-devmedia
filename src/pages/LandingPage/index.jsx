import { Link } from "react-router-dom";
import './style.css'

const LandingPage = () => {
  return (
    <div className="banner-LandingPage">
      <div>
        <h1>RESTAURANT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          quis nisl lacus. Etiam non leo diam.
        </p>
        <Link className="link-home" to="/home">VEJA O NOSSO MENU</Link>
      </div>
    </div>
  );
};

export default LandingPage;
