import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
export function Body() {



    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >

            <Canvas shadows async>

                <Experience></Experience>

            </Canvas>
            <div className='options_main'>
                <div className='options_cakecover'>
                <div className='options_top'>
                        <div className='options_top_o'></div>
                    </div>
                </div>
                <div className='options_filling'>
                    <div className='options_top'>
                        <div className='options_top_o'></div>
                    </div>
                </div>
                <div className='options_flavor'>
                  <div className='options_top'>
                  <div className='options_top_o'></div>
                  </div>
                </div>

            </div>
        </div>

       <div className='body_main3dcake'></div>
        <div className='configcake_main'> </div>
       
        
        
        </>
    )
}