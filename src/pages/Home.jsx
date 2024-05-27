import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import windsound from "../assets/audio/WindSound.mp3";
import { useRef, useState } from "react";
import soundoff from "../assets/icons/soundoff.png";
import soundon from "../assets/icons/soundon.png";
import HomeContent from "../Components/HomeContent";

const Home = () => {
  const audioRef = useRef(new Audio(windsound));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen realtive bg-sky-200">
      <HomeContent />
      <Canvas
        className="w-full h-screen fixed"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <hemisphereLight />
          <Sky />
          <Plane />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
