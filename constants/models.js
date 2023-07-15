import React from 'react';

import { useGLTF } from "@react-three/drei";

const Model = () => {
    const gltf = useGLTF("/models/headphone.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model2 = () => {
    const gltf = useGLTF("/models/cctv.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model3 = () => {
    const gltf = useGLTF("/models/microphone.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model4 = () => {
    const gltf = useGLTF("/models/printer.gltf");
    return <primitive object={gltf.scene} />;
  };

 
  const Model5 = () => {
    const gltf = useGLTF("/models/mouse1.gltf");
    return <primitive object={gltf.scene} />;
  };

 
  const Model6 = () => {
    const gltf = useGLTF("/models/keyboard.gltf");
    return <primitive object={gltf.scene} />;
  };
 
  const Model7 = () => {
    const gltf =  useGLTF("/models/projector1.gltf");
    return <primitive object={gltf.scene} />;
  };
  
  const Model8 = () => {
    const gltf = useGLTF("/models/speaker.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model9= () => {
    const gltf = useGLTF("/models/gamepad1.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model10 = () => {
    const gltf = useGLTF("/models/lednew.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model11 = () => {
    const gltf = useGLTF("/models/flashdrive.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model12 = () => {
    const gltf = useGLTF("/models/Webcam.gltf");
    return <primitive object={gltf.scene} />;
  };
  
  const Model13 = () => {
    const gltf = useGLTF("/models/digitalcamera.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model14 = () => {
    const gltf = useGLTF("/models/barcodereader.gltf");
    return <primitive object={gltf.scene} />;
  };


 const models = [
    { id: 1, name: "Headphone", component: () => <Model /> },
    { id: 2, name: "CCTV", component: () => <Model2 /> },
    { id: 3, name: "Microphone", component: () => <Model3 /> },
    { id: 4, name: "Printer", component: () => <Model4 /> },
    { id: 5, name: "Mouse", component: () => <Model5 /> },
    { id: 6, name: "Keyboard", component: () => <Model6 /> },
    { id: 7, name: "Projector", component: () => <Model7 /> },
    { id: 8, name: "Speaker", component: () => <Model8 /> },
    { id: 9, name: "GamePad", component: () => <Model9 /> },
    { id: 10, name: "LED", component: () => <Model10/> },
    { id: 11, name: "USB", component: () => <Model11/> },
    { id: 12, name: "Webcam", component: () => <Model12 /> },
    { id: 13, name: "Digital Camera", component: () => <Model13 /> },
    { id: 14, name: "Barcode Reader", component: () => <Model14 /> },
  ];
   

  export default models;
