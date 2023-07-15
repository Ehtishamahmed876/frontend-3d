import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';
import Link from 'next/link';



function Chapter2({user}) {

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
    { id: 9, name: "GamePad", component: () => <Model9 /> },
    { id: 10, name: "LED", component: () => <Model10/> },
    { id: 11, name: "USB", component: () => <Model11/> },
    { id: 12, name: "Webcam", component: () => <Model12 /> },
    { id: 13, name: "Digital Camera", component: () => <Model13 /> },
    { id: 14, name: "Barcode Reader", component: () => <Model14 /> },
  ];
  // const Model10 = () => {
  //   const gltf = useGLTF("/models/pc1.gltf");
  //   return <primitive object={gltf.scene} />;
  // };

  return  (
    <>
    <div className='min-h-screen bg-white'>
    <Header name={user.user.username}/>
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14 justify-start  pb-20">
   
    {models.map((model) => (
        <div key={model.id} className="border border-blue-600 rounded-xl bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto">
            
          <Canvas camera={{ position: [0, 0, 40] }}>
          <ambientLight intensity={0.5} />
            <pointLight intensity={1} position={[2, 2, 2]} />
            {model.component()}
            <OrbitControls />
          </Canvas>
          <Link href={`/model?id=${model.id}`} passHref>

          <p className="text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg">
            {model.name}
          </p>
          
          </Link>
        </div>
      ))}

          
{/*     

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [10,10, 10] }} >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>LED</p>
      </div>
    

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [100, 100, 100] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>USB</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [20, 20, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Webcam</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model6  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Digital Camera</p>
    </div> 



    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 120] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model8  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Barcode Reader</p>
    </div>  */}
    </div>

    </div>



  </>
  )
}

export default Chapter2;
export const getServerSideProps = withIronSessionSsr( function ({
  req,
  res,
}) {
  const user = req.session.user
  // console.log("hello")
  

  if (user === undefined) {
      res.setHeader('location', '/')
      res.statusCode = 302
      res.end()
      return {
          props: {
              user: { isLoggedIn: false,  email: '',name:'', }

          },
      }
  }



  return {
      
      props: { user: req.session.user,},
  
  }
},
sessionOptions)