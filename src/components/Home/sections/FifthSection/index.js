import cn from 'classnames';
import { useState } from 'react';
import Container from '../../../../layout/container';
import styles from './styles/index.module.scss';

const FifthSection = () => {
    const faqs = [
        {
            title: 'Can I choose the currency for the generated amount?',
            desc: 'Yes, if you are the Owner of the workspace you can choose your preferred currency from the drop-down list of profile settings.'
        },
        {
            title: 'Where can I view the amount reports?',
            desc: 'You can find the amount reports on the timesheet reports page. You can view them both on hours and amounts.'
        },
        {
            title: 'How can I set an hourly rate?',
            desc: 'You can go to members page from your dashboard, select your preferred contract and put an hourly rate for a certain team member.'
        },
        {
            title: 'Who can set an hourly rate?',
            desc: 'The owner and also the executive manager if the owner gives permission to him/her.'
        },
    ]

    const [collapse, setCollapse] = useState({ id: null, status: false });

    const handleCollapse = (id) => {
        setCollapse({
            id,
            ...(id !== collapse.id ? { id, status: true } : { status: !collapse.status })
        })
    }

    return (
        <section className={styles['fifth-section']}>
            <Container>
                <div className={styles['faq']}>
                    <h2 className={styles['faq--title']}>FAQs</h2>
                    <div className={styles['collapses']}>
                        {faqs.map((faq, idx) => {
                            return (
                                <div key={idx} onClick={() => handleCollapse(idx)}
                                    className={cn(styles['collapse'], {
                                        [styles['collapse_active']]: collapse.id === idx && collapse.status
                                    })}>
                                    <h3 className={styles['collapse--title']}>{faq.title}</h3>
                                    <p className={
                                        cn(styles['collapse--desc'], {
                                            [styles['collapse--desc_active']]: collapse.id === idx && collapse.status
                                        })
                                    }>{faq.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FifthSection;