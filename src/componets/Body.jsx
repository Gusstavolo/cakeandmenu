import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
//import { SpotLight,AmbientLight, PointLight } from "three";

export function Body() {



    return (
        <>
        <div className='d3_' >
            <div className='d3_backg'></div>
            <Canvas colorManagement shadows shadowMap  >
            <Experience></Experience>
            </Canvas>
            
        </div>
        <div className='banner' />
        
        <div className='body_Main'>
            
               
                    
            <div className='config_Main'>
                
            </div>



        </div>
        
        </>
    )
}