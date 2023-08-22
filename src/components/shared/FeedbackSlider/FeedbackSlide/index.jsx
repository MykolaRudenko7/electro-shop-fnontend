import styles from 'components/shared/FeedbackSlider/FeedbackSlide/FeedbackSlide.module.scss'

export default function SliderSlide({ feedback, author }) {
  return (
    <>
      <div className={styles.sliderSlide}>
        <div className={styles.feedback}>
          <p className={styles.text}>{feedback}</p>
        </div>
        <p className={styles.author}>- {author}</p>
        <button className={styles.btn}>Leave Us A Review</button>
      </div>
    </>
  )
}
