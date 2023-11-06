import Link from 'next/link'
import Image from 'next/image'
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/popover'
import profilePicture from 'images/header/profile.svg'
import styles from 'components/shared/Header/Navbar/PopoverAccountMenu/PopoverAccountMenu.module.scss'

export default function PopoverAccountMenu() {
  return (
    <Popover className={styles.accountPopover} closeOnBlur={true} placement="bottom-start">
      <PopoverTrigger>
        <Image
          alt="profile picture"
          className={styles.leftComponentImage}
          height={36}
          src={profilePicture}
          width={36}
        />
      </PopoverTrigger>
      <PopoverContent bgColor="white" outline="0">
        <PopoverBody>
          <ul className={styles.popoverList}>
            <li className={styles.popoverListItem}>
              <Link className={styles.popoverLink} href="/">
                Home
              </Link>
            </li>
            <li className={styles.popoverListItem}>
              <Link className={styles.popoverLink} href="/products-catalog">
                Laptops
              </Link>
            </li>
            <li className={styles.popoverListItem}>
              <Link className={styles.popoverLink} href="/profile">
                My Account
              </Link>
            </li>
            <li className={styles.popoverListItem}>
              <Link className={styles.popoverLink} href="/login">
                Login
              </Link>
            </li>
          </ul>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
