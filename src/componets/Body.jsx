import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
//import { SpotLight,AmbientLight, PointLight } from "three";

export function Body() {



    return (
        <>
      
        <div className='banner' /> 

         <div className='d3_' >
            
            <div className='d3_backg_main'></div>
            
            <Canvas >
            <Experience></Experience>
            
            </Canvas>
            
        </div>

        <div className='body_main3dcake'></div>
        <div className='configcake_main'></div>
       
        
        
        </>
    )
}