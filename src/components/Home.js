import React from 'react'
import perfil from '../static/perfil.jpeg'


const Home = () => {
    return (
        <div id='home' className='bg-mybackground w-full h-screen flex flex-col items-center justify-evenly p-10'>
            <img className='w-52 h-64 rounded-md' src={perfil} alt="" />
            <div>
                <h2 className='text-[#20FF36]'>Desarrollador Full Stack</h2>
                <h1 className='text-white text-4xl my-4'>Matias Aguilera</h1>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quam rem assumenda admaioresdelectus iste,
                    consequatur quibusdam eveniet illo nulla cum corrupti laborum magni ducimus alias fugit culpa. Eum?consequatur quibusdam eveniet illo nulla cum corrupti laborum magni ducimus alias fugit culpa. Eum?
                </p>
            </div>
        </div>
    )
}

export default Home