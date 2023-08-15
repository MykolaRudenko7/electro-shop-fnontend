import Image from 'next/image'
import brandPicture from 'images/AboutPage/main/ProductChoice/zip.svg'
import styles from 'components/AboutProductPage/ProductChoice/ProductChoiceSlider/ProductChoiceSliderItem/ProductSlideItem.module.scss'

export default function ProductSlideItem({ imageSrc, text, linkText, href }) {
  return (
    <div className={styles.slide}>
      <Image className={styles.slideImage} src={imageSrc} alt="product slide" />
      <div className={styles.textBlock}>
        <Image
          className={styles.textBlockImage}
          src={brandPicture}
          alt="brand picture"
          width={77}
          height={27}
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
