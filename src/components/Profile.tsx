import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/burn-c.png" alt="Carlos Oliveira" />
      <div>
        <strong>Carlos Oliveira</strong>
        <p>level 1</p>
      </div>
    </div>
  )
}