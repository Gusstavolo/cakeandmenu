import '../App.css';
import'../index.css';
import { Canvas } from '@react-three/fiber';
import { Experience, OverlaySlice, ExperienceAcetato } from './Experience';
import React, { useState, useRef } from 'react';

const valoresPermitidos = [20, 23, 41, 55];
const valoresPermitidosTop = [24, 30, 40, 41, 52]
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

const BoxFloorActiveCheck = ({ floor, setFloorChange }) => {
    return (
        <div className='box_option_cakecover'>
            <div className='box_option_cakecover_left'>
                <h1 className='poetsenTxt txtslice'>ADICIONAR ANDAR?</h1>
            </div>

            <div className='box_option_cakecover_right'>
                <div className='option_cake_floor'>
                    <div className="poetsenTxt txtslice">{floor}</div>
                    
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            value={floor}
                            onChange={setFloorChange}
                            checked={floor === 'Sim'}
                        />
                        <span className="slider">
                            <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}

const SliderComponent = ({ valoresPermitidos, valorSlider, setValorSlider }) => {
  
    const handleSliderChange = (event) => {
      const valorSelecionado = parseInt(event.target.value); // Converte o valor para número inteiro
      // Verifica se o valor selecionado está na lista de valores permitidos
      if (valoresPermitidos.includes(valorSelecionado)) {
        setValorSlider(valorSelecionado); // Define o novo valor do controle deslizante
      }
    };
 
      const handleIncrementClick = () => {
        const currentIndex = valoresPermitidos.indexOf(valorSlider);
        if (currentIndex < valoresPermitidos.length - 1) {
          const nextValue = valoresPermitidos[currentIndex + 1];
          setValorSlider(nextValue);
        }
      };
  
      const handleDecrementClick = () => {
        const currentIndex = valoresPermitidos.indexOf(valorSlider);
        if (currentIndex > 0) {
          const previousValue = valoresPermitidos[currentIndex - 1];
          setValorSlider(previousValue);
        }
      };
  
    return (<div className='slider-container_main'>
             <div className='slider-container_Decrement' onClick={handleDecrementClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-440v-80h560v80H200Z"/></svg>
                </div>
                <div className="slider-container">
                    
                    <div className="slider-wrapper">
                    <input
                        type="range"
                        id="temp3"
                        name="temp3"
                        min={valoresPermitidos[0]}
                        max={valoresPermitidos[valoresPermitidos.length - 1]}
                        step="1"
                        value={valorSlider}
                        list="values"
                        onChange={handleSliderChange}
                    ></input>
                    <div className="slider-value poetsenTxt">
                        {valorSlider} FATIAS
                    </div>
                    
                    
                    
                    <datalist id="values">
                        {valoresPermitidos.map((valor) => (
                        <option key={valor} value={valor} label={valor}></option>
                        ))}
                    </datalist>
                </div>
            
            </div>
            <div className='slider-container_Increment' onClick={handleIncrementClick}>

                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>
      </div>
    );
  };

export function Body() {
    const [valorSlider, setValorSlider] = useState(valoresPermitidos[0]); // Inicializa com o primeiro valor permitido
    const [valorSliderTop, setValorSliderTop] = useState(valoresPermitidos[0]); // Inicializa com o primeiro valor permitido

    const [isLayerOpen, setIsLayerOpen] = useState(false);
    const [isLayerOpenTOP, setIsLayerOpenTOP] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Chantininho');   
    const [name, setName] = useState(''); // Estado para o nome
    const [surname, setSurname] = useState('');
    const [floor, setFloor] = useState('Não');

   

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
    const setfloorChange = (event) => {
        setFloor(event.target.checked ? 'Sim' : 'Não');
    }
    
    
    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >
         {selectedOption === 'Chantininho' && (
            
            <Canvas shadows async>
                <Experience name={name} surname={surname}></Experience>
            </Canvas>
            
         )}
         {selectedOption === 'Acetato' && (
            <Canvas shadows async>
                <ExperienceAcetato name={name} surname={surname}/>
            </Canvas>
         )}





            <div className='options_main'>
                <div className='options_main_top'>
                    <div className='resultSlice'>
                        <div>
                            <h1 className='poetsenTxt txtfont'>Fatias</h1>
                             <h1 className='poetsenTxt txtfontP'>{valorSlider + (floor === "Sim" ? valorSliderTop : 0 )} </h1>
                        </div>
                        
                        <div>
                            <h1 className='poetsenTxt txtfont'>Andar</h1>
                            <h1 className='poetsenTxt txtfontP'>{floor}</h1>
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

                                 <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Chantininho')}>Chantininho</div>
                                  <div className="option_item poetsenTxt txtslice" onClick={() => selectOption('Acetato')}>Acetato</div>
                                  
                        </div>
                    )}
                          {selectedOption === 'Chantininho' && (
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
         <BoxFloorActiveCheck floor={floor} setFloorChange={setfloorChange}></BoxFloorActiveCheck>
        
        
         <div className='box_option_cakecover'>
            <div className='box_option_cakecover_left'>
              <h1 className='poetsenTxt txtslice'>TAMANHO DO BOLO?</h1>
            </div>
            <div className='box_option_cakecover_right flexcolum'>
            
            <div className="slider-value poetsenTxt">
                         BOLO
                    </div>
            <SliderComponent valoresPermitidos={valoresPermitidos} valorSlider={valorSlider} setValorSlider={setValorSlider}/>

            </div>
                {floor === "Sim" && (
                    <div className='box_option_cakecover_right flexcolum'>
                
                    <div className="slider-value poetsenTxt">
                                ANDAR
                            </div>
                    <SliderComponent valoresPermitidos={valoresPermitidosTop} valorSlider={valorSliderTop} setValorSlider={setValorSliderTop}/>
        
                    </div>

            )}
          </div>
           
      
        </>
      )}
 
                        
                        
                        
                     

                    <button onClick={toggleLayerTOP}>Fechar</button>
                     </div>
                    
                    
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