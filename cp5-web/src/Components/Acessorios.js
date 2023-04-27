import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Css/style.css";

import item1 from '../Img/acessorios.png';
import item2 from '../Img/acessorio1.jpg';
import item3 from '../Img/acessorio2.png';
import item4 from '../Img/acessorio3.png';
import item5 from '../Img/acessorio4.jpg';
import item6 from '../Img/acessorio5.jpg';

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

export default function Acessorios() {
  const roupas = [
    {
      id: 1,
      imagem: item1,
      nome: "Boné Palmeiras",
      preco: "49.99",
    },
    {
      id: 2,
      imagem: item2,
      nome: "Bola Palmeiras",
      preco: "99.99",
    },
    {
      id: 3,
      imagem: item3,
      nome: "Garrafa Palmeiras",
      preco: "29.99",
    },
    {
      id: 4,
      imagem: item4,
      nome: "Almofada Palmeiras",
      preco: "19.99",
    },
    {
      id: 5,
      imagem: item5,
      nome: "Baralho Palmeiras",
      preco: "49.99",
    },
    {
      id: 6,
      imagem: item6,
      nome: "Chaveirp Palmeiras",
      preco: "9.99",
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