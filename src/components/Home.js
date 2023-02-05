import Aos from 'aos';
import { useEffect } from 'react';
import Header from './Header';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className='lg:h-[900px]'>

            <Header />

            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                    <div className='text-center xl:text-right xl:absolute'>
                        <h1 className="h1 xl:max-w-[700px] mb-6 lg:mb-12" data-aos='fade-down' data-aos-delay='400'>
                            מעבדת סלולר ניידת
                        </h1>
                        <p className="lead xl:max-w-[380px] mb-6 lg:mb-12">
                            המעבדה שלנו מספקת מגוון רחב של שירותי תיקון טלפונים תוך מתן שירות מקצועי ומהיר עד הלקוח
                        </p>
                        <a href='#contact'>
                            <button className="btn btn-primary bg-accent-orange mb-8 xl:mb-0">בואו נדבר</button>
                        </a>
                    </div>
                    <div className="xl:absolute xl:left-4 xl:bottom-16">
                        <img className='max-w-[80%]' src={require('../images/home.png')} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;