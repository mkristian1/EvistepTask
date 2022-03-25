import { IconGenerating, IconRealTime, IconTimeTracker } from '../../../../images';
import Container from '../../../../layout/container';
import styles from './styles/index.module.scss';

const FourthSection = () => {
    const features = [
        {
            icon: IconGenerating,
            title: 'Invoice Generating',
            desc: 'Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.'
        },
        {
            icon: IconRealTime,
            title: 'Real-time reports',
            desc: 'Have a full understanding of where your team is heading by analyzing their performance in real-time reports.'
        },
        {
            icon: IconTimeTracker,
            title: 'Time Tracking with Screenshots',
            desc: 'See how your employees are spending their working time with the help of 4 different screenshot modes.'
        }
    ]
    return (
        <section className={styles['fourth-section']}>
            <Container>
                <div className={styles['features']}>
                    <h2 className={styles['features--title']}>Features</h2>
                    <p>Get The Most Out of Your Work</p>
                    <div className={styles['blocks-wrap']}>
                        {features.map((feature, idx) => {
                            return (
                                <div key={idx} className={styles['block']}>
                                    <img alt='Invoice Generating' src={feature.icon} />
                                    <h4 className={styles['block--title']}>{feature.title}</h4>
                                    <p className={styles['block--desc']}>{feature.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <a href="#">More Features</a>
                </div>
            </Container>
        </section>
    )
}

export default FourthSection;