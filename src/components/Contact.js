import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Modal from './Modal';


const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="my-[75px] xl:my-[150px] border-b-2" id='contact'>
            <div className="container mx-auto mb-12">
                <div className="flex flex-col xl:flex-row justify-between items-center">
                    <div className="py-12 xl:py-24 text-center xl:text-right">
                        <h2 className="h2 mb-5">דברו איתנו</h2>
                        <p className="lead">השאירו פרטים ונחזור אליכם תוך 12 שעות</p>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
                        <button className="btn btn-secondary bg-accent-orange"
                            onClick={() => setShowModal((curr) => !curr)}>
                            השאירו פרטים
                        </button>
                        <a href='tel:+972526364654'>
                            <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
                                התקשר עכשיו
                                <BsArrowLeft className='text-2xl text-accent-primary group-hove:text-white transition' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {
                showModal ? <Modal /> : ''
            }

        </section>
    )
}


export default Contact;