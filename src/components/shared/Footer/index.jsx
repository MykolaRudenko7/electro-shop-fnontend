'use client'

import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { footerAllLinks, footerCardsPartnerImages } from 'data/footerData'
import FooterLinkListItem from 'components/shared/Footer/FooterLinkListItem'
import SubscriptionForm from 'components/shared/Footer/FooterSubscriptionForm'
import ProdutAdvantages from 'components/shared/Footer/ProdutAdvantages'
import facebookPicture from 'images/footer/facebook-bottom.svg'
import instagramPicture from 'images/footer/instagram-bottom.svg'
import styles from 'components/shared/Footer/Footer.module.scss'
import { footerAllLinksBlocks } from 'data/footerData'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ProdutAdvantages />
      <div className={styles.footer__container}>
        <div className={styles.footerTop}>
          <div className={styles.footerTop__text}>
            <h3 className={styles.footerTop__title}>Sign Up To Our Newsletter.</h3>
            <p className={styles.footerTop__subtitle}>
              Be the first to hear about the latest offers.
            </p>
          </div>
          <SubscriptionForm />
        </div>
        <div className={styles.footerColumnsLinks}>
          {footerAllLinksBlocks.map(({ title, links }) => (
            <FooterLinkListItem key={uuidv4()} title={title} links={links} />
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom__imgWrapper}>
            <Link href="#">
              <Image src={facebookPicture} alt="facebook picture and link" />
            </Link>
            <Link href="#">
              <Image src={instagramPicture} alt="instagram picture and link" />
            </Link>
          </div>
          <ul className={styles.bottomCards}>
            {footerCardsPartnerImages.map(({ src, alt }) => (
              <li key={uuidv4()} className={styles.cardWrapper}>
                <Image className={styles.cardImage} src={src} alt={alt} />
              </li>
            ))}
          </ul>
          <p className={styles.aboutSite}>Copyright © 2020 Shop Pty. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
