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
                        <h1 className='poetsenTxt txtfontP'>R$ 100,50</h1>
                    </div>
                </div>


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
                     
                    
                    <button onClick={toggleLayerTOP}>Fechar</button>
                </div>
            )}




       <div className='body_main3dcake'></div>
        <div className='configcake_main'> </div>
       
        
        
        </>
    )
}