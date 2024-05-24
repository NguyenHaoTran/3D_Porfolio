{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Popup
      </div> */}
import { Suspense, useEffect } from 'react';      
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';
import Donutcafe from '../models/Donut_coffe';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import windsound from '../assets/audio/WindSound.mp3';
import { useRef, useState } from 'react';
import soundoff from '../assets/icons/soundoff.png';
import soundon from '../assets/icons/soundon.png';


const Home = () => {
  const audioRef = useRef(new Audio(windsound));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustDonutCafeForScreenSize = () =>{
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [10, 10, 10];
    }else {
      screenScale = [20, 20, 20];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [donutCafeScale, donutPosition, donutRotation] = adjustDonutCafeForScreenSize();

  return (
    <section className="w-full h-screen realtive bg-sky-200">
      <Canvas 
        className='w-full h-screen relative'
        camera={{near: 0.1, far: 1000}}  
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={1}/>
          <ambientLight intensity={0.5}/>
          <pointLight />
          <hemisphereLight />
          <Sky/>
          <Donutcafe
            positon={donutPosition}
            scale={donutCafeScale}
            rotation={donutRotation}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home