import { v4 as uuidv4 } from 'uuid'
import { advantagesData } from 'data/shared/advantagesData'
import AdvantageCard from 'components/shared/Footer/ProdutAdvantages/AdvantageCard/index.'
import styles from 'components/shared/Footer/ProdutAdvantages/ProductAdvantages.module.scss'

export default function ProdutAdvantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantagesContainer}>
        <ul className={styles.advantagesCards}>
          {advantagesData.map((card) => (
            <AdvantageCard key={uuidv4()} {...card} />
          ))}
        </ul>
      </div>
    </section>
  )
}
