import { useRouter } from 'next/router';
import models from '../../constants/models';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
// import { withIronSessionSsr } from 'iron-session/next';
// import { sessionOptions } from '/lib/withSession';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
// import models from '.'; // Import the models array



const ModelPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const fetchModel = async () => {
      // Find the selected model based on the ID
      const model = await models.find((model) => model.id === Number(id));
      setSelectedModel(model);
      console.log(model)
    };

    if (id) {
      fetchModel();
    }
  }, [id]);

  if (!selectedModel) {
    return null; // Render loading state or fallback component while the model is being fetched
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow flex justify-around items-center p-3">
        <Link href="/login">
          <div className="flex-shrink-0 flex gap-2 items-center">
            <img className="h-16 w-auto" src="/logo3d2.jpeg" alt="Logo" />
            <h2 className="text-black text-xl font-serif">BookTo3D</h2>
          </div>
        </Link>
       
        <div>
          <div className=" bg-white p-3 text-white"></div>
        </div>
      </header>
      <div className='flex flex-col justify-center p-5 m-5 gap-2 items-center'>
        <h2 className='text-black text-3xl'>{selectedModel.name}</h2>
        <div className='border border-blue-600 bg-blue-500 rounded-xl m-5 w-64 h-64 md:w-full md:h-[40rem] md:m-auto'>
          <Canvas camera={{ position: [0, 0, 40] }}>
            <ambientLight intensity={0.5} />
            <pointLight intensity={1} position={[2, 2, 2]} />
            <selectedModel.component />
            <OrbitControls />
          </Canvas>

        </div>
      </div>
    </div>

  );
};

export default ModelPage;


// export const getServerSideProps = withIronSessionSsr(function ({
//   req,
//   res,
// }) {
//   const user = req.session.user
//   // console.log("hello")


//   if (user === undefined) {
//     res.setHeader('location', '/')
//     res.statusCode = 302
//     res.end()
//     return {
//       props: {
//         user: { isLoggedIn: false, email: '', name: '', }

//       },
//     }
//   }



//   return {

//     props: { user: req.session.user, },

//   }
// },
//   sessionOptions)