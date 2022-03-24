import cn from 'classnames'
import styles from './styles/index.module.scss'

const Button = ({ children }) => {
    return (
        <button className={cn(styles['button_outline'], styles['button'])}>
            {children}
        </button>
    )
}

export default Button;