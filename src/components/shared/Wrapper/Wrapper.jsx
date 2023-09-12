import styles from 'components/shared/Wrapper/Wrapper.module.scss'

export default function Wrapper({ children }) {
  return <div className={styles.container}>{children}</div>
}
