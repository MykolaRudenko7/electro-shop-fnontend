import { v4 as uuidv4 } from 'uuid'
import { loginNavigationLinks } from 'data/login/loginNavigationLinks'
import NavigationLink from 'components/shared/NavigationLink'
import LoginSection from 'components/LoginPage/LoginSection'
import styles from 'app/login/Login.module.scss'

export const metadata = {
  title: 'Login',
  description: 'Login page',
}

export default function Login() {
  return (
    <div className={styles.login}>
      <ul className={styles.linksWrapper}>
        {loginNavigationLinks.map((link) => (
          <NavigationLink key={uuidv4()} {...link} />
        ))}
      </ul>
      <h2 className={styles.title}>Customer Login</h2>
      <LoginSection />
    </div>
  )
}
