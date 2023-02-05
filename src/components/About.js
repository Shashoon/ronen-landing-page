

const About = () => {


    return (
        <section className='my-[30px] xl:mt-[200px]' id='about'>
            <div className="container mx-auto">
                <div className='bg-slate-700/[15%] rounded-[50px] min-h-[560px] px-12 py-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-right  xl:gap-x-[60px] xl:pb-0'>
                    <div className='flex-1 xl:pr-12'>
                        <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
                            פשוט התקשרו או השאירו פרטים ואנחנו בדרך אליכם
                        </h2>
                        <p className='max-w-[474px] mx-auto xl:mx-0'
                            data-aos='fade-up'
                            data-aos-delay='400'>
                            המעבדה שלנו מספקת מגוון רחב של שירותי תיקון טלפונים תוך מתן שירות מקצועי ומהיר עד הלקוח
                        </p>
                    </div>

                    <div className='flex-1' data-aos='zoom-in-left'>
                        <img src={require('../images/about.png')} />
                    </div>



                </div>
            </div>
        </section>
    )
}

export default About;