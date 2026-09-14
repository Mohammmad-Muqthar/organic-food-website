import "./PromoSection.css";

function PromoSection() {
  return (
    <section className="promo-section">

      {/* Organic Vegetables */}

      <div className="promo-card vegetables-card">

        <div className="promo-image vegetables-image">
          <img
            src="/promo-avocado.png"
            alt="Organic avocado"
          />
        </div>

        <div className="promo-content">
          <h2>
            Organic
            <br />
            Vegetables
          </h2>

          <button>
            SHOP NOW
          </button>
        </div>

      </div>


      {/* Natural & Healthy */}

      <div className="promo-card healthy-card">

        <div className="promo-content">
          <h2>
            Natural
            <br />
            & Healthy
          </h2>

          <p>
            Always pure, fresh and natural
            <br />
            products for a healthier life.
          </p>
        </div>

        <div className="promo-image healthy-image">
          <img
            src="/natural-food.png"
            alt="Natural food"
          />
        </div>

      </div>

    </section>
  );
}

export default PromoSection;