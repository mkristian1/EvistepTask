import styles from './styles/index.module.scss';
import Container from '../../../../layout/container';
import { executiveManager } from '../../../../images';

const SecondSection = () => {
    return (
        <section className={styles['second-section']}>
            <Container>
                <div className={styles['permisions']}>
                    <div>
                        <h2 className={styles['permisions--title']}>Permissions to Financial Information</h2>
                        <p>The owner is eligible to give visibility of the contract's rate to certain team members. You can set up the rate visibility from the member’s list.</p>
                        <p>Setting “Show hourly rate” will mean the member is able to see all financial information related to his/her contract and role permission.</p>
                        <p className={styles['permisions--block_border']}>If a member has no permission to financial information,  he/she cannot view any kind of financial information, as well as is not able to generate invoices.</p>
                    </div>
                    <div>
                        <img src={executiveManager} alt="Executive Manager" />
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default SecondSection;