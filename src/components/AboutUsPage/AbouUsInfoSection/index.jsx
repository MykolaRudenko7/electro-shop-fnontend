import { useId } from 'react'
import Image from 'next/image'
import styles from 'components/AboutUsPage/AbouUsInfoSection/AbouUsInfoSection.module.scss'

export default function AbouUsInfoSection({ imageSrc, title, badge, doubleSubtitle, subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.summary}>
          {badge && <Image className={styles.badge} src={badge} alt="badge" />}
          <h2 className={styles.header}>{title}</h2>
          {doubleSubtitle &&
            doubleSubtitle.map((subs) => (
              <p className={styles.paragraph} key={useId()}>
                {subs}
              </p>
            ))}
          <p className={styles.paragraph}>{subtitle}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt="picture" className={styles.infoBlockImage} />
        </div>
      </div>
    </div>
  )
}
