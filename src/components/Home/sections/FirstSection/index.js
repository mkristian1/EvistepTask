import { amountReports, billableHours, IconMoney } from '../../../../images';
import Container from '../../../../layout/container';
import Button from '../../../Button';
import styles from './styles/index.module.scss';

const FirstSection = () => {
    return (
        <section className={styles['first-section']}>
            <Container>
                <div className={styles['billable']}>
                    <h1 className={styles['billable--title']}>
                        <img src={IconMoney} alt="Billable Hours" />
                        Billable Hours
                    </h1>
                    <p className={styles['billable--description']}>Set an hourly rate to your contracts to mark them as billable. Get amount reports and generate invoices to get paid.</p>
                    <div className={styles['billable--wrap-btn']}><Button theme='violet'>Start 7 Days Free Trial</Button></div>
                    <p className={styles['billable--wr-text']}>Use now, pay in 30 days. No credit card required</p>
                </div>
                <img src={billableHours} alt="Billable Hours" />
                <div className={styles['amount']}>
                    <img src={amountReports} alt="Amount" />
                    <div className={styles['amount']}>
                        <div>
                            <h2 className={styles['amount--title']}>Amount Reports</h2>
                            <p>If you’re working on an hourly rate, it will be a good idea to make your contracts billable  by adding an hourly rate in the contract's settings.</p>
                            <p>By doing so your tracked time will be converted into an amount and you will be able to see the reports both in hours and amounts. Amount reports show the billed amount of each member by day, week or month.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FirstSection;