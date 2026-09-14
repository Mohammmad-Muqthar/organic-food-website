import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">100% ORGANIC</p>

        <h1>
          Healthy
          <br />
          Organic Food
        </h1>

        <p className="hero-description">
          Fresh, healthy and natural food
          <br />
          for a better and healthier life.
        </p>

        <button className="hero-button">
          SHOP NOW
        </button>
      </div>

      <div className="hero-image">
        <img
          src="/hero-organic.png"
          alt="Fresh organic vegetables"
        />
      </div>
    </section>
  );
}

export default Hero;