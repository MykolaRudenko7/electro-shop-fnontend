import Image from 'next/image'
import brandPicture from 'images/AboutPage/ProductChoice/zip.svg'
import styles from '@/ProductChoiceSection/ProductChoiceSlider/ProductChoiceSliderItem/ProductSlideItem.module.scss'

export default function ProductSlideItem({ imageSrc, text, linkText, href }) {
  return (
    <div className={styles.slide}>
      <Image alt="product slide" className={styles.slideImage} src={imageSrc} />
      <div className={styles.textBlock}>
        <Image
          alt="brand picture"
          className={styles.textBlockImage}
          height={27}
          src={brandPicture}
          width={77}
        />
        <p className={styles.textBlockSubtitle}>
          {text}
          <a className={styles.textBlockLink} href={href}>
            {linkText}
          </a>
        </p>
      </div>
    </div>
  )
}
