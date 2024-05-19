import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience, OverlaySlice } from './Experience';
import React, { useState } from 'react';





export function Body() {

    const [isLayerOpen, setIsLayerOpen] = useState(false);

    const toggleLayer = () => {
        setIsLayerOpen(!isLayerOpen);
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
                    <div className='options_cakecover'>
                    <div className='options_top'>
                            <div className='options_top_o'></div>
                        </div>
                    </div>
                    <div className='options_filling' onClick={toggleLayer}>
                        <div className='options_top'>
                            <div className='options_top_o'/>
                        </div>



                        
                    </div>
                    <div className='options_flavor'>
                    <div className='options_top'><div className='options_top_o'></div>
                    </div>
                    </div>

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




       <div className='body_main3dcake'></div>
        <div className='configcake_main'> </div>
       
        
        
        </>
    )
}