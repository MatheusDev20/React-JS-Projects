import styles from './Header.module.css'
import logo from '../../assets/ignite-logo.svg';
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="ignite-logo" />
      </header>
    </>
  )
}