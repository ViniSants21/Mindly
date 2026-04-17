function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Planos e Preços</h2>
        <p>Escolha o plano que melhor se adapta às suas necessidades.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Grátis</h3>
            <p className="price">R$ 0</p>
            <ul>
              <li>Até 3 planos de estudo</li>
              <li>Relatórios básicos</li>
              <li>3 desafios por mês</li>
            </ul>
            <button className="btn-primary">Começar Grátis</button>
          </div>
          <div className="pricing-card popular">
            <h3>Premium</h3>
            <p className="price">R$ 19,99/mês</p>
            <ul>
              <li>Planos ilimitados</li>
              <li>Relatórios avançados</li>
              <li>Desafios ilimitados</li>
              <li>Suporte prioritário</li>
            </ul>
            <button className="btn-primary">Assinar Premium</button>
          </div>
          <div className="pricing-card">
            <h3>Institucional</h3>
            <p className="price">Contato</p>
            <ul>
              <li>Para escolas e universidades</li>
              <li>Recursos personalizados</li>
              <li>Relatórios para administradores</li>
              <li>Suporte dedicado</li>
            </ul>
            <button className="btn-outline">Falar com Vendas</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;