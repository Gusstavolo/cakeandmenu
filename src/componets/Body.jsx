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


export function Body() {

    const [isLayerOpen, setIsLayerOpen] = useState(false);
    const [isLayerOpenTOP, setIsLayerOpenTOP] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');   
    
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
              <h1 className='poetsenTxt txtslice'>Gustavo</h1>
            </div>
          </div>
          <div className='box_option_cakecover'>
            <div className='box_option_cakecover_left'>
              <h1 className='poetsenTxt txtslice'>SOBRENOME?</h1>
            </div>
            <div className='box_option_cakecover_right'>
              <h1 className='poetsenTxt txtslice'>Oliveira</h1>
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