import React,{ useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='fixed w-full z-10'>
      <button onClick={handleMenu} className='absolute top-4 right-4'>
        {menu ?
          <IoMdClose color='white' size='2.5rem' />
          :
          <FiMenu color='white' size='2.5rem' />
        }
      </button>
      {menu && (
        <div className='w-full h-screen bg-menuColor'>
          <div className='w-full h-screen bg-neutral-600'>
            <ul className={menu ? 'h-full flex flex-col items-center text-white justify-center gap-12 font-bold text-2xl' : 'opacity-0 invisible'}>
              <li>
                <Link onClick={handleMenu} to="home" smooth={true} duration={500}>
                  <FiHome size='2rem' color='white' />
                </Link>
              </li>
              <li>
                <Link onClick={handleMenu} to="proyectos" smooth={true} duration={100}>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link onClick={handleMenu} to="tecnologias" smooth={true} duration={500}>
                  Tecnologias
                </Link>
              </li>
              <li>
                <Link onClick={handleMenu} to="about" smooth={true} duration={500}>
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link onClick={handleMenu} to="contact" smooth={true} duration={500}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>

  );
}

export default Navbar;
