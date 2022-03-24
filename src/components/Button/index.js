import cn from 'classnames'
import styles from './styles/index.module.scss'

const Button = ({ children, theme }) => {
    return (
        <button className={cn(styles['button'], {
            [styles[`button_${theme}`]]: theme,
        })}>
            {children}
        </button>
    )
}

export default Button;