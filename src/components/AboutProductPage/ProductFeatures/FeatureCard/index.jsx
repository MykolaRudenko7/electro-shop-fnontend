import Image from 'next/image'
import styles from 'components/AboutProductPage/ProductFeatures/FeatureCard/FeaturesCard.module.scss'

export default function FeaturesCard({ imageSrc, alt, description }) {
  return (
    <figure className={styles.featureCard}>
      <div className={styles.featureImageWrapper}>
        <Image className={styles.featureImage} src={imageSrc} alt={alt} />
      </div>
      <figcaption className={styles.featureDescription}>{description}</figcaption>
    </figure>
  )
}
