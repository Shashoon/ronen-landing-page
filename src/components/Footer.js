import Copyright from './Copyright';



const Footer = () => {
    const socialList = [

    ]

    return (
        <footer>
            <div className="container mx-auto">
                <div className='flex flex-col justify-around xl:flex-row text-center mb-8 xl:text-right gap-y-12'>
                    <div className='w-[95%] mx-8 flex flex-col items-center xl:items-start'>
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
                                <a className='text-slate-600 text-xl hover:text-primary' href="https://www.linkedin.com/in/sharon-mazcka/" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg>
                                </a>
                            </li>
                            <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-primary_hover transition-all'>
                                <a className='text-slate-600 text-xl hover:text-primary' href="https://github.com/Shashoon" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.30-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.30-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}


export default Footer;