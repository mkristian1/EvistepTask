import cn from 'classnames';
import styles from './styles/index.module.scss';

const PermisionsWrap = ({ title, desc, icon, borderColor }) => {

    return (
        <div className={
            cn(styles['permisions-wrap'], {
                [styles[`permisions-wrap_${borderColor}`]]: borderColor
            })
        }>
            <div>
                <div className={styles['title-wrap']}>
                    <div><img src={icon} alt={title} /></div>
                    <div>{title}</div>
                </div>
                {desc && <p className={styles['permisions-wrap--desc']}>{desc}</p>}
            </div>
        </div>
    )
}

export default PermisionsWrap;