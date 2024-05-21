import { useState } from "react";
const BoloForm = () => {
    const [nome, setNome] = useState('');
    const [sabor, setSabor] = useState('');
    const [tamanho, setTamanho] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const mensagem = `Olá, gostaria de encomendar um bolo.\nNome: ${nome}\nSabor: ${sabor}\nTamanho: ${tamanho}`;
      const numeroWhatsApp = '557599808083';
      const urlWhatsApp = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
      
      window.location.href = urlWhatsApp;
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Sabor:</label>
          <input type="text" value={sabor} onChange={(e) => setSabor(e.target.value)} required />
        </div>
        <div>
          <label>Tamanho:</label>
          <input type="text" value={tamanho} onChange={(e) => setTamanho(e.target.value)} required />
        </div>
        <button type="submit">Enviar Pedido</button>
      </form>
    );
  };
