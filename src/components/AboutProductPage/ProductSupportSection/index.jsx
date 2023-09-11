import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { supportLinks } from 'data/about-product/supportData'
import styles from 'components/AboutProductPage/ProductSupportSection/ProductSupportSection.module.scss'

export default function ProductSupport() {
  return (
    <section className={styles.support}>
      <div className={styles.support__container}>
        <div className={styles.links}>
          {supportLinks.map(({ href, title }) => (
            <Link className={styles.link} href={href} key={uuidv4()}>
              <span className={styles.linkTitle}>{title}</span>
              <span className={styles.linkTitleMark}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
