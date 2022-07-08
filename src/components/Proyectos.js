import React,{ useState } from 'react'
import proyectImg from '../static/proyectImg.jpg'
import github from '../static/githubIcon.png'
import deploy from '../static/deploy.png'

const Proyectos = () => {

    const [loadMore,setLoadMore] = useState(false);

    const loadMoreImages = () => {
        setLoadMore(!loadMore);
    }


    return (
        <div id='proyectos' className='bg-mybackground w-full h-full text-white py-8 px-8 flex flex-col items-center justify-evenly' >
            <h1 className='text-4xl'>PROYECTOS</h1>
            <div className='relative mt-4 group'>
                <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                    <img src={github} alt="" className='w-14 h-14' />
                    <img src={deploy} alt="" className='w-14 h-14' />
                </div>
            </div>
            <div className='relative mt-4 group' >
                <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                    <img src={github} alt="" className='w-14 h-14' />
                    <img src={deploy} alt="" className='w-14 h-14' />
                </div>
            </div>
            <div className='relative mt-4 group'>
                <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                    <img src={github} alt="" className='w-14 h-14' />
                    <img src={deploy} alt="" className='w-14 h-14' />
                </div>
            </div>
            {loadMore && (
                <>
                    <div className='relative mt-4 group'>
                        <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                        <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                            <img src={github} alt="" className='w-14 h-14' />
                            <img src={deploy} alt="" className='w-14 h-14' />
                        </div>
                    </div>
                    <div className='relative mt-4 group'>
                        <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                        <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                            <img src={github} alt="" className='w-14 h-14' />
                            <img src={deploy} alt="" className='w-14 h-14' />
                        </div>
                    </div>
                    <div className='relative mt-4 group'>
                        <img src={proyectImg} alt="" className='w-56 h-56 rounded-lg group-hover:blur-sm' />
                        <div className='hidden group-hover:flex items-center justify-center absolute top-1/3 left-1/4'>
                            <img src={github} alt="" className='w-14 h-14' />
                            <img src={deploy} alt="" className='w-14 h-14' />
                        </div>
                    </div></>
            )}

            {!loadMore ? <button className='mt-4 bg-btnGreen w-40 h-12 rounded-lg text-xl text-center' onClick={loadMoreImages}>Ver mas</button> : <button className='mt-4 bg-btnLightGray w-40 h-12 rounded-lg text-xl text-menuColor text-center' onClick={loadMoreImages}>Ver menos</button>}
        </div>
    )
}

export default Proyectos