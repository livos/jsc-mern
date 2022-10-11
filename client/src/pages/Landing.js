import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1 className="info">
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby post-ironic +1 venmo chartreuse ennui cornhole. You
            probably haven't heard of them bruh XOXO echo park venmo kale chips
            vegan gentrify. Flannel ramps tote bag migas direct trade palo
            santo.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </main>
  );
};

export default Landing;
