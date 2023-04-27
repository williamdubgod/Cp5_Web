import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Css/style.css";

import item1 from '../Img/tenis1.jpg';
import item2 from '../Img/tenis2.png';
import item3 from '../Img/tenis3.jpg';
import item4 from '../Img/tenis4.jpg'
import item5 from '../Img/tenis5.jpg';
import item6 from '../Img/tenis6.jpg';

function Roupa({ roupa }) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(parseFloat(roupa.preco));

  useEffect(() => {
    setPrecoTotal(parseFloat(roupa.preco) * quantidade);
  }, [quantidade, roupa.preco]);

  function handleAdicionarAoCarrinho() {
    console.log(`Adicionado ao carrinho: ${quantidade} x ${roupa.nome}`);
  }

  return (
    <div className="roupa-card" key={roupa.id}>
      <img src={roupa.imagem} alt={roupa.nome} />
      <h3>{roupa.nome}</h3>
      <p>R$: {precoTotal.toFixed(2)}</p>
      <div className="quantidade-container">
        <label htmlFor={`quantidade-${roupa.id}`}>Quantidade:</label>
        <div className="quantidade-input-container">
          <input
            id={`quantidade-${roupa.id}`}
            type="number"
            value={quantidade}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              if (newQuantity >= 1) {
                setQuantidade(newQuantity);
              }
            }}
          />
          <button className="carrinho-button" onClick={handleAdicionarAoCarrinho}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Calcados() {
  const roupas = [
    {
      id: 1,
      imagem: item1,
      nome: "Tênis Nike Air",
      preco: "1299.99",
    },
    {
      id: 2,
      imagem: item2,
      nome: "Tênis Adidas",
      preco: "299.99",
    },
    {
      id: 3,
      imagem: item3,
      nome: "Tênis Nike Air Max",
      preco: "1499.99",
    },
    {
      id: 4,
      imagem: item4,
      nome: "Tênis Puma Azul",
      preco: "149.99",
    },
    {
      id: 5,
      imagem: item5,
      nome: "Tênis Puma Branco",
      preco: "499.99",
    },
    {
      id: 6,
      imagem: item6,
      nome: "Tênis Puma Preto",
      preco: "129.99",
    },
  ];

  return (
      <div className="roupas-container">
        {roupas.map((roupa) => (
          <Roupa roupa={roupa} key={roupa.id} />
        ))}
      </div>
  );
}