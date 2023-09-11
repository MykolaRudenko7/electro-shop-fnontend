import Image from 'next/image'
import styles from 'components/AboutProductPage/ProductFeaturesSection/FeatureCard/FeaturesCard.module.scss'

export default function FeaturesCard({ imageSrc, alt, description }) {
  return (
    <figure className={styles.featureCard}>
      <div className={styles.featureImageWrapper}>
        <Image alt={alt} className={styles.featureImage} src={imageSrc} />
      </div>
      <figcaption className={styles.featureDescription}>{description}</figcaption>
    </figure>
  )
}
