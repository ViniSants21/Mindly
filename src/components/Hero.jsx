function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>
          Organize seus estudos <br />
          com a Mindly
        </h1>

        <p>
          Crie planos sob medida, acompanhe seu progresso e
          ganhe recompensas enquanto aprende.
        </p>

        <button className="btn-primary">
          Crie uma conta
        </button>

      </div>

      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
      />

    </section>
  );
}

export default Hero;