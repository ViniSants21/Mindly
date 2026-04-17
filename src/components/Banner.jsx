function Banner() {
  return (
    <section className="banner">

      <div className="banner-left">

        <h1>
          Seu ritmo, <br />
          sua jornada.
        </h1>

        <span className="brand">Mindly</span>

        <ul>
          <li>Educação</li>
          <li>Organização</li>
          <li>Progressão</li>
          <li>Eficiência</li>
          <li>Acessibilidade</li>
          <li>Respeito</li>
        </ul>

      </div>

      <img
        className="banner-img"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />

      <button className="btn-orange">
        Começar agora
      </button>

    </section>
  );
}

export default Banner;