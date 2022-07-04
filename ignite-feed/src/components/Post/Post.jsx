import styles from './Post.module.css';

export const Post = () => {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src='https://github.com/MatheusDev20.png' />

            <div className={styles.authorInfo}>
              <strong>Matheus de Paula</strong>
              <span>Backend Developer</span>
            </div>
          </div>

          <time title='03 de julho ás 12:12' dateTime='2022-07-03 12:12:34'>Publicado há 1h </time>

        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 jane.design/doctorcare</p>

          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#rocketseat</a>{' '}
          <a href="#">#nlw</a>{' '}

        </div>
        <form className={styles.comentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder='Deixe um comentário' />

          <button type='submit'>Comentar</button>
        </form>
      </article>

    </>

  )

}