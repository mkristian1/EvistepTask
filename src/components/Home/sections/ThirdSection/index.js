import { financialPermisions, IconClient, IconEmployee, IconExecutiveManager, IconOwner, IconProjectManager } from '../../../../images';
import Container from '../../../../layout/container';
import PermisionsWrap from '../../../PermisionsWrap';
import styles from './styles/index.module.scss';

const ThirdSection = () => {
    const members = [
        {
            title: 'Owner',
            desc: 'Owner is eligible to set up the access of financial information on a workspace level.',
            icon: IconOwner,
            borderColor: 'first',
        },
        {
            title: 'Executive Manager',
            desc: null,
            icon: IconExecutiveManager,
            borderColor: 'second',
        },
        {
            title: 'Project Manager',
            desc: null,
            icon: IconProjectManager,
            borderColor: 'third',
        },
        {
            title: 'Employee',
            desc: null,
            icon: IconEmployee,
            borderColor: 'fourth',
        },
        {
            title: 'Client',
            desc: null,
            icon: IconClient,
            borderColor: 'fifth',
        },
    ]
    return (
        <section className={styles['third-section']}>
            <Container>
                <div className={styles['workspace']}>
                    <div className={styles['workspace--title-block']}>
                        <h4 className={styles['workspace--sub-title']}>Workspace Permissions</h4>
                        <h2 className={styles['workspace--title']}>Financial Permissions for Member Types</h2>
                    </div>
                    <div className={styles['workspace--wrap']}>
                        <div>
                            {members.map(member => {
                                return (
                                    <PermisionsWrap
                                        {...member}
                                    />
                                )
                            })}
                        </div>
                        <img src={financialPermisions} alt="financial Permisions" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ThirdSection;