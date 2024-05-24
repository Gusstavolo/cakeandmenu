import '../App.css';
import'../index.css';
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
function StringInsert() {

    return (
    <label class="search-label">
        <input type="text" name="text" className="input" required="" placeholder="Type here..." />
        <kbd className="slash-icon">/</kbd>
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 56.966 56.966" style={{enablebackground:"new 0 0 512 512"}}  xml:space="preserve">
        <g>
            <path  d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" data-original="#000000" className=""></path>
        </g>
        </svg>
        
  </label>
  )
}


export function Body() {

    const [isLayerOpen, setIsLayerOpen] = useState(false);
    const [isLayerOpenTOP, setIsLayerOpenTOP] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Aniversário');   
    const [name, setName] = useState(''); // Estado para o nome
    const [surname, setSurname] = useState('');


    const toggleLayer = () => {
        setIsLayerOpen(!isLayerOpen);
    };
    const toggleLayerTOP = () => {
        setIsLayerOpenTOP(!isLayerOpenTOP);
    };

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };
    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >

            <Canvas shadows async>
                <Experience></Experience>
            </Canvas>
            <div className='options_main'>
                <div className='options_main_top'>
                    <div className='resultSlice'>
                        <div>
                            <h1 className='poetsenTxt txtfont'>Fatias</h1>
                             <h1 className='poetsenTxt txtfontP'>32</h1>
                        </div>
                        
                        <div>
                            <h1 className='poetsenTxt txtfont'>Andar</h1>
                            <h1 className='poetsenTxt txtfontP'>Sim</h1>
                        </div>
                    </div>
                    <div className='resultPrice'>
                        <h1 className='poetsenTxt txtfont'>Total</h1>
                        <h1 className='poetsenTxt txtfontP'>R$ 154,50</h1>
                    </div>
                </div>


                <div className='options_main_botton'>

                    <BlockOptions onClick={toggleLayerTOP} />
                    <BlockOptions onClick={toggleLayer}></BlockOptions>
                    <BlockOptions></BlockOptions>

                 

                </div>
            </div>
        </div>
         {isLayerOpenTOP && (
                <div className="layer_cakecover">
                    
                     <div className='layer_cakecover_main'>

                     
                        <div className='box_option_cakecover' onClick={toggleOptions}> 
                        <div className="box_option_cakecover_left">
                        <h1 className="poetsenTxt txtslice">OPÇÕES</h1>
                        </div>

                        <div className="box_option_cakecover_right">

                          <h1 className="poetsenTxt txtslice">{selectedOption || 'Selecionar'}</h1>
                        <svg className='icon_menu' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

                        </div>
                    </div>
                    {isOpen && (
                        
                            
                            <div className="options_list">
                                <div className='box_option_cakecover'>
                                      <div className="box_option_cakecover_left">
                                          <h1 className="poetsenTxt txtslice">OPÇÕES</h1>
                                      </div>

                                </div>

                                 <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Aniversário')}>Aniversário</div>
                                  <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Normal')}>Normal</div>
                                  <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Normal')}>Normal</div>
                                  <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Normal')}>Normal</div>
                                  <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Normal')}>Normal</div>
                        
                        </div>
                    )}
                          {selectedOption === 'Aniversário' && (
        <>
          <div className='box_option_cakecover'>
            <div className='box_option_cakecover_left'>
              <h1 className='poetsenTxt txtslice'>NOME?</h1>
            </div>
            
            <div className='box_option_cakecover_right'>
            
                    <label className="search-label">
                    
                        <input
                        type="text" name="text"
                        className="input" 
                        required="" 
                        value={name} 
                            onChange={handleNameChange} 
                        placeholder="Digite seu nome..." />
                        {name != "" && (

                            <svg  className="search-icon "  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>
                    
                        )}
                    
                </label>
              
            </div>
          </div>
          <div className='box_option_cakecover'>
            <div className='box_option_cakecover_left'>
              <h1 className='poetsenTxt txtslice'>SOBRENOME?</h1>
            </div>
            <div className='box_option_cakecover_right'>
                 <label className="search-label">
             
                    <input
                     type="text" name="text"
                      className="input" 
                      required="" 
                      value={surname} 
                      onChange={handleSurnameChange} 
                      placeholder="Digite seu sobrenome..." />
                    {surname != "" && (

                        <svg  className="search-icon "  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>
                 
                    )}
                    
                 </label>
            </div>
          </div>
          <div className='box_option_cakecover'>
                <div className='box_option_cakecover_left'>
                  <h1 className='poetsenTxt txtslice'>SOBRENOME?</h1>
                </div>

                <div className='box_option_cakecover_right'>
                    <div className='option_cake_floor'>
                      <div className="poetsenTxt txtslice">Sim</div>
                      <label className="switch">
                            <input type="checkbox" />
                            <span className="slider">
                              <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
                            </span>
                        </label>
                    </div>
                </div>
          </div>
        </>
      )}
 
                        
                        
                        
                     


                     </div>
                    
                    <button onClick={toggleLayerTOP}>Fechar</button>
                </div>
            )}
            
                        
            {isLayerOpen && (
                <div className="layer_filling">
                     <div className="layer_filling_top">
                        
                           <OverlaySlice></OverlaySlice> 
                        
                        </div>
                    
                    
                    <button onClick={toggleLayer}>Fechar</button>
                </div>
            )}
            




       <div className='body_main3dcake'></div>
        <div className='configcake_main'> </div>
       
        
        
        </>
    )
}