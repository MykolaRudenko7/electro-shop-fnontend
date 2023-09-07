import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import Popover from 'components/shared/Popover'
import Navbar from 'components/shared/Header/Navbar'
import { headerTopSocialMediaLinks } from 'data/headerData'
import style from 'components/shared/Header/Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.top}>
        <ul className={style.top__wrapper}>
          <li className={style.data}>
            <Popover />
          </li>
          <li className={style.address}>
            <p className={style.addressText}>
              Visit our showroom in 1234 Street Address City Address, 1234{' '}
            </p>
            <a className={style.addressLink} href="tell:+(00) 1234 5678">
              Contact Us
            </a>
          </li>
          <li className={style.tell}>
            <a href="(00) 1234 5678">Call Us: (00) 1234 5678</a>
            <figure className={style.socials}>
              {headerTopSocialMediaLinks.map(({ href, src, alt, width, height }) => (
                <Link className={style.socialsLink} key={uuidv4()} href={href}>
                  <Image
                    className={style.socialsLinkImage}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                  />
                </Link>
              ))}
            </figure>
          </li>
        </ul>
      </div>
      <Navbar />
    </header>
  )
}
