import "./offers.css";
import { NavLink } from "react-router-dom";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offer">
        <h5>
          Last chance! Get Hulu + Live TV with Disney+ and ESPN+ for $49.99/mo
          for your first 3 months. Ends 10/11.{" "}
          <span>
            <NavLink to="/offers">GET THIS DEAL</NavLink>{" "}
          </span>
        </h5>
        {/* <br /> */}
        <p>Limited time only. Add'l terms apply.</p>
      </div>
    </section>
  );
};

export default Offers;
