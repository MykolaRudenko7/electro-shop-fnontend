import { v4 as uuidv4 } from 'uuid'
import { featuresData } from 'data/featuresData'
import FeaturesCard from 'components/AboutProductPage/ProductFeaturesSection/FeatureCard'
import styles from 'components/AboutProductPage/ProductFeaturesSection/ProductFeaturesSection.module.scss'

export default function ProductFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <h2 className={styles.features__title}>Features</h2>
        <p className={styles.features__subtitle}>
          The MPG series brings out the best in gamers by allowing full expression in color with
          advanced RGB lighting control and synchronization.
        </p>
        <div className={styles.cards}>
          {featuresData.map((feature) => (
            <FeaturesCard key={uuidv4()} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
