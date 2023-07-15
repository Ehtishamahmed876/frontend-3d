import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';
import Link from 'next/link';



function Chapter1({user}) {
  const models2 = [
    { type: "headphone", url:"/models/headphone.gltf"
  },
    { type: "camera", url:"/models/camera.gltf" ,}
 
  ];
   
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

 
  const Model9 = () => {
    const gltf = useGLTF("/models/keyboard.gltf");
    return <primitive object={gltf.scene} />;
  };
 
  const Model10 = () => {
    const gltf = useGLTF("/models/projector1.gltf");
    return <primitive object={gltf.scene} />;
  };
  
  const Model11 = () => {
    const gltf = useGLTF("/models/speaker.gltf");
    return <primitive object={gltf.scene} />;
  };

// chapter 1
 const models = [
  { id: 1, name: "Headphone", component: () => <Model /> },
  { id: 2, name: "CCTV", component: () => <Model2 /> },
  { id: 3, name: "Microphone", component: () => <Model3 /> },
  { id: 4, name: "Printer", component: () => <Model4 /> },
  { id: 5, name: "Mouse", component: () => <Model5 /> },
  { id: 6, name: "Keyboard", component: () => <Model9 /> },
  { id: 7, name: "Projector", component: () => <Model10 /> },
  { id: 8, name: "Speaker", component: () => <Model11 /> },
];
 

 
  


  return  (
    <>
    <div className='min-h-screen bg-white'>
    <Header name={user.user.username} />
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14 justify-start  pb-20 ">
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
    </div>

          
    
{/* 
     <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>CCTV</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, 40] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Microphone</p>
      </div>
    

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 50] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Computer Printer</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Mouse</p>
    </div> 



    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model9  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Keyboard</p>
    </div> 

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [400,400, 300] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model11  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Speaker</p>
    </div>  */}


    </div>
    

  </>
  )
}

export default Chapter1;
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