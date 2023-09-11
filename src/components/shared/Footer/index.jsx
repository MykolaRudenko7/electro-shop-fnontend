'use client'

import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { footerAllLinksBlocks, footerCardsPartnerImages } from 'data/shared/footerData'
import FooterLinkListItem from 'components/shared/Footer/FooterLinkListItem'
import SubscriptionForm from 'components/shared/Footer/FooterSubscriptionForm'
import ProdutAdvantages from 'components/shared/Footer/ProdutAdvantages'
import facebookPicture from 'images/footer/facebook-bottom.svg'
import instagramPicture from 'images/footer/instagram-bottom.svg'
import styles from 'components/shared/Footer/Footer.module.scss'

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
            <FooterLinkListItem key={uuidv4()} links={links} title={title} />
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom__imgWrapper}>
            <Link href="#">
              <Image alt="facebook picture and link" src={facebookPicture} />
            </Link>
            <Link href="#">
              <Image alt="instagram picture and link" src={instagramPicture} />
            </Link>
          </div>
          <ul className={styles.bottomCards}>
            {footerCardsPartnerImages.map(({ src, alt }) => (
              <li className={styles.cardWrapper} key={uuidv4()}>
                <Image alt={alt} className={styles.cardImage} src={src} />
              </li>
            ))}
          </ul>
          <p className={styles.aboutSite}>Copyright © 2020 Shop Pty. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
