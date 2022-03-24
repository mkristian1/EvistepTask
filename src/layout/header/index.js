import Button from "../../components/Button";
import { logo } from "../../images";
import Container from "../container";
import styles from './styles/index.module.scss'

const Header = () => {
    return (
        <header>
            <Container>
                <div className={styles['header']}>
                    <img src={logo} alt="Logo" />
                    <div className={styles['menu-wrap']}>
                        <ul className={styles['menu']}>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Time Tracking</li>
                            <li>Price</li>
                            <li>Download</li>
                            <li>Log in</li>
                        </ul>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;