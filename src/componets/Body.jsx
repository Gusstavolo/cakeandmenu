import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience, OverlaySlice } from './Experience';
import React, { useState, useRef } from 'react';



function BlockOptions({  onClick }) {
   
    return(
        <div className='options_cakecover' onClick={onClick} >
                        <div className='options_top'>
                            <div className='options_top_o'></div>
                        </div>
        </div>
    )
}
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

export function Body() {

    const [isLayerOpen, setIsLayerOpen] = useState(false);
    const [isLayerOpenTOP, setIsLayerOpenTOP] = useState(false);

    const toggleLayer = () => {
        setIsLayerOpen(!isLayerOpen);
    };
    const toggleLayerTOP = () => {
        setIsLayerOpenTOP(!isLayerOpenTOP);
    };

    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >

            <Canvas shadows async>

                <Experience></Experience>

            </Canvas>
            <div className='options_main'>
                <div className='options_main_botton'>

                    <BlockOptions onClick={toggleLayerTOP} />
                    <BlockOptions onClick={toggleLayer}></BlockOptions>
                    <BlockOptions></BlockOptions>

                 

                </div>
            </div>
        </div>
        
            {isLayerOpen && (
                <div className="layer_filling">
                     <div className="layer_filling_top">
                        
                           <OverlaySlice></OverlaySlice> 
                        
                        </div>
                    
                    
                    <button onClick={toggleLayer}>Fechar</button>
                </div>
            )}
             {isLayerOpenTOP && (
                <div className="layer_cakecover">
                     
                    <BoloForm></BoloForm>
                    <button onClick={toggleLayerTOP}>Fechar</button>
                </div>
            )}




       <div className='body_main3dcake'></div>
        <div className='configcake_main'> </div>
       
        
        
        </>
    )
}