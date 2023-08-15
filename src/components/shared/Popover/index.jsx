'use client'
import Image from 'next/image'
import styles from 'components/shared/Popover/Popover.module.scss'
import arrowPicture from 'images/AboutPage/header/arrow.svg'
import mapPicture from 'images/AboutPage/header/map.svg'
import timePicture from 'images/AboutPage/header/time.svg'

export default function Popover() {
  return (
    <div className={styles.popoverContainer}>
      <button
        type="button"
        aria-label="show time and map popover"
        className={styles.popoverTrigger}
      >
        <p className={styles.popoverTriggerText}>
          Mon-Thu: <span className={styles.popoverTriggerTextColor}> 9:00 AM - 5:30 PM</span>
        </p>
        <Image src={arrowPicture} alt="arrow picture" width={16} height={15} />
      </button>
      <div className={styles.popoverContent}>
        <div className={styles.time}>
          <div className={styles.time__picture}>
            <Image src={timePicture} alt="arrow picture" width={35} height={35} />
          </div>
          <div className={styles.time__textBlock}>
            <p className={styles.time__textItems}>We are open:</p>
            <p className={styles.time__textItems}>
              Mon-Thu: <span className={styles.time__textItemsMark}> 9:00 AM - 5:30 PM</span>
            </p>
            <p className={styles.time__textItems}>
              Fr: <span className={styles.time__textItemsMark}> 9:00 AM - 6:00 PM</span>
            </p>
            <p className={styles.time__textItems}>
              Sat: <span className={styles.time__textItemsMark}> 11:00 AM - 5:00 PM</span>
            </p>
          </div>
        </div>
        <div className={styles.map}>
          <div className={styles.map__picture}>
            <Image src={mapPicture} alt="arrow picture" width={35} height={35} />
          </div>
          <p className={styles.map__text}>Address: 1234 Street Address, City Address, 1234</p>
        </div>
        <div className={styles.contacts}>
          <p className={styles.contacts__text}>
            Phones:
            <a className={styles.contacts__link} href="tel:(00) 1234 5678">
              (00) 1234 5678
            </a>
          </p>
          <p className={styles.contacts__text}>
            E-mail:
            <a className={styles.contacts__link} href="mailto:shop@email.com">
              shop@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
