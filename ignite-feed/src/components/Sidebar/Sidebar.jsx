import styles from './Sidebar.module.css'
import userAvatar from '../../assets/avatar.jpeg'
import { PencilLine } from 'phosphor-react'
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <img className={styles.avatar} src={userAvatar} />
        <strong>
          Matheus de Paula
        </strong>
        <span>Backend Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}