function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Tem dúvidas ou sugestões? Estamos aqui para ajudar!</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p><strong>Email:</strong> contato@mindly.com</p>
            <p><strong>Telefone:</strong> (11) 9999-9999</p>
            <p><strong>Endereço:</strong> São Paulo, SP</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensagem" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;