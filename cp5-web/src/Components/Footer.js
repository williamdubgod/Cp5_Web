import '../App.css'
import './Css/style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Sobre nós</h3>
            <p>Uma loja de palmeirenses para palmeirenses.</p>
            <ul className="social-icons">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contato</h3>
            <ul>
              <li>Endereço: Av. Paulista, 1106</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@porcomania.com.br</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Newsletter</h3>
            <p>Receba nossas novidades em primeira mão.</p>
            <form action="#" method="post">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Seu melhor email" />
              </div>
              <button type="submit" className="btn btn-primary">
                Inscreva-se
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                &copy; 2023 - Porco Mania - Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

