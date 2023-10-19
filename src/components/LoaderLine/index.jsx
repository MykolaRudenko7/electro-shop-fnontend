import styles from 'components/LoaderLine/LoaderLine.module.scss'

export default function LoaderLine() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  )
}
