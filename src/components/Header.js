import Nav from './Nav';
import NavMobile from './NavModile';
import { BsArrowLeft } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {

    const [navMobile, setNavMobile] = useState(false);

    return (
        <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0 py-12'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-x-[40px]'>
                        <a href="#">
                            <img src={require('../images/logo.png')} className='w-20 mr-6' />
                        </a>

                        <div className='hidden lg:flex'>
                            <Nav />
                        </div>
                    </div>

                    <div className={`${navMobile ? 'max-h-52' : 'max-h-0'
                        } lg:hidden absolute top-24 bg-slate-400 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden z-10`} >
                        <NavMobile />
                    </div>

                    <a href='tel:+972526364654'>
                        <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                            הזמן עכשיו

                            <BsArrowLeft className={'text-2xl text-accent-primary group-hover:text-white transition'} />
                        </button>
                    </a>

                    <div
                        className='lg:hidden text-2xl text-primary cursor-pointer'
                        onClick={() => setNavMobile(!navMobile)}
                    >
                        <FaBars />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;