import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
export function Body() {



    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >
            
            <div className='d3_backg_main'></div>
            <div className='d3_backg'></div>
            
            <Canvas shadows async>

                <Experience></Experience>

            </Canvas>
            
        </div>

        <div className='body_main3dcake'></div>
        <div className='configcake_main'>




            
        </div>
       
        
        
        </>
    )
}