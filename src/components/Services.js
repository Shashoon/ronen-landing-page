import { BsArrowRight } from 'react-icons/bs';


const Services = () => {
    const data = [
        {
            title: 'תיקון מסך',
            data: 'תיקון מסך שבור/פגום לכל סוגי הטלפון',
            image: 'pic1.png'
        }, 
        {
            title: 'תיקון מצלמות',
            data: 'תיקון מצלמה קדמית/אחורית',
            image: 'pic2.png'
        },
        {
            title: 'החלפת סוללה ושקע טעינה',
            data: 'החלפת סוללה, ניקוי והחלפת שקע טעינה',
            image: 'pic3.png'
        },
        {
            title: 'תיקון קורוזיה',
            data: 'תיקון ושחזור טלפונים כתוצאה מפגיעה במים',
            image: 'pic4.png'
        }
    ]

    return (
        <section className='my-[70px] xl:my-[150px]' id='services'>
            <div className="container mx-auto">
                <div className="text-center">
                    <h2
                        className='h2 mb-6 xl:mb-12'
                        data-aos='fade-down'
                        data-aos-delay='100'
                    >
                        חלק מהשירותים שאנו מציעים
                    </h2>
                    <p className='lead max-w-[584px] mx-auto mb-16 xl:mb-24'
                        data-aos='fade-down'
                        data-aos-delay='200'>
                        אנו דוגלים בשירות מהיר ויעיל בכדי לספק פיתרון פשוט ונוח לכל לקוחותינו, עם סיום השירות שלנו אנו נותנים אחריות בכתב לכל לקוח ומתחייבים לתיקון הבעיה.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
                    {
                        data.map((curr, _index) => {
                            return (
                                <div key={_index} className='w-full rounded-[120px] px-8 max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto bg-slate-200 hover:bg-slate-300'
                                    data-aos='zoom-in'
                                    data-aos-offset='100'
                                    data-aos-delay='400'>

                                    <div className='max-w-[180px] xl:mr-7 xl:max-w-[232px]'
                                        data-aos='zoom-in-right'
                                    >
                                        <img src={require('../images/' + curr.image)} />
                                    </div>
                                    <div className='max-w-[220px]'>
                                        <h3 className='h3 mb-4'>{curr.title}</h3>
                                        <p className='font-light italic mb-4'>{curr.data}</p>

                                        <div className='flex items-center gap-x-2 group'>
                                            <a className='text-primary font-bold' href='#'>
                                            </a>  </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;