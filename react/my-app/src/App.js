import React, { Component } from "react";
// import './App.css';
import "./css/pure-min.css"; // estilo css
import "./css/side-menu.css"; // modelo css
import $ from "jquery";

class App extends Component {
  constructor() {
    super(); // deve ser invocado por primeiro sempre
    this.state = { lista: [] }; // state , disponiblizado pelo react, esta sempre sendo observada
  }

  componentDidMount() {
    $.ajax({
      url: "http://localhost:8080/api/autores",
      dataType: "json",
      success: function(resposta) {
        console.log(this);
        this.setState({ lista: resposta });
      }.bind(this)
    });
  }

  render() {
    // renderiza o HTML
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span />
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">
              Company
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Home
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Autor
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Livro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input id="senha" type="password" name="senha" />
                </div>
                <div className="pure-control-group">
                  <label />
                  <button
                    type="submit"
                    className="pure-button pure-button-primary"
                  >
                    Gravar
                  </button>
                </div>
              </form>
            </div>
            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lista.map(function(autor) {
                    return (
                      <tr key={autor.id}>
                        <td>{autor.nome}</td>
                        <td>{autor.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; // export App como padrao.