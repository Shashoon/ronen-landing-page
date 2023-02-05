import Copyright from './Copyright';



const Footer = () => {
    const socialList = [

    ]

    return (
        <footer>
            <div className="container mx-auto">
                <div className='flex flex-col justify-around xl:flex-row text-center mb-8 xl:text-right gap-y-12'>
                    <div className='w-[95%] flex flex-col items-center xl:items-start'>
                        <a>
                            <img src={require('../images/logo.png')} className="mb-[65px] w-20" />
                        </a>

                        <div>

                            <div className='max-w-[260px] mb-5 text-primary font-bold'>
                                ראשון לציון, מרכז
                            </div>

                            <div className='font-light italic'>
                                Ronen@gmail.com
                            </div>

                            <div className='font-light italic'>
                                052-6364654
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='font-extrabold text-primary mb-8'>

                        </div>
                        <ul className='flex gap-y-4 gap-x-4 justify-center'>
                            <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-primary_hover transition-all'>
                                <a className='text-slate-600 text-xl hover:text-primary' href="#contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /> </svg>
                                </a>
                            </li>
                            <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-primary_hover transition-all'>
                                <a className='text-slate-600 text-xl hover:text-primary' href="mailto:shashoonn@gmail.com" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='currentColor'><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                                </a>
                            </li>
                            <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-primary_hover transition-all'>
                                <a className='text-slate-600 text-xl hover:text-primary' href="tel:+972526364654" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill='currentColor'><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg> </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}


export default Footer;