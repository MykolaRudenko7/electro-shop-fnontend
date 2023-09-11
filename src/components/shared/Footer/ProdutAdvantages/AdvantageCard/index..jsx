import Image from 'next/image'
import styles from 'components/shared/Footer/ProdutAdvantages/AdvantageCard/AdvantageCard.module.scss'

export default function AdvantageCard({ imageSrc, title, subtitle }) {
  return (
    <li className={styles.advantageCard}>
      <div className={styles.advantageCardImageWrapper}>
        <Image alt={`${title} picture`} className={styles.advantageCardImage} src={imageSrc} />
      </div>
      <div className={styles.advantageTextBlock}>
        <p className={styles.advantageTitle}>{title}</p>
        <p className={styles.advantageSubtitle}>{subtitle}</p>
      </div>
    </li>
  )
}
