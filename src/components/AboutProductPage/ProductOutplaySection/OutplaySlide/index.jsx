import styles from 'components/AboutProductPage/ProductOutplaySection/OutplaySlide/OutplaySlide.module.scss'

export default function OutplaySlide({ title, subtitle }) {
  return (
    <div className={styles.slideText}>
      <p className={styles.slideTitle}>{title}</p>
      <p className={styles.slideSubtitle}>{subtitle}</p>
    </div>
  )
}
