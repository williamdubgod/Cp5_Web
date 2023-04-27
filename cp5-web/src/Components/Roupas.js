import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Css/style.css";

import item1 from '../Img/palmeiras02.png';
import item2 from '../Img/goleiro01.jpg';
import item3 from '../Img/goleiro02.jpg';
import item4 from '../Img/calça.png';
import item5 from '../Img/agasalho.jpg';
import item6 from '../Img/marcos.jpg';

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

export default function Roupas() {
  const roupas = [
    {
      id: 1,
      imagem: item1,
      nome: "Camisa Palmeiras 1",
      preco: "299.00",
    },
    {
      id: 2,
      imagem: item2,
      nome: "Camisa Goleiro 1",
      preco: "250.00",
    },
    {
      id: 3,
      imagem: item3,
      nome: "Camisa Goleiro 2",
      preco: "200.00",
    },
    {
      id: 4,
      imagem: item4,
      nome: "Calça Palmeiras",
      preco: "100.00",
    },
    {
      id: 5,
      imagem: item5,
      nome: "Agasalho Palmeiras",
      preco: "380.00",
    },
    {
      id: 6,
      imagem: item6,
      nome: "Camisa São Marcos",
      preco: "120.00",
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