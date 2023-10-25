import { v4 as uuidv4 } from 'uuid'
import { loginNavigationLinks } from 'data/login/loginNavigationLinks'
import SignInForm from 'components/LoginPage/SignInForm'
import RegistrationInfo from 'components/LoginPage/RegistrationInfo'
import NavigationLink from 'components/shared/NavigationLink'
import styles from 'app/login/Login.module.scss'

export default function Login() {
  return (
    <div className={styles.login}>
      <ul className={styles.linksWrapper}>
        {loginNavigationLinks.map((link) => (
          <NavigationLink key={uuidv4()} {...link} />
        ))}
      </ul>
      <h2 className={styles.title}>Customer Login</h2>
      <section className={styles.loginSection}>
        <SignInForm />
        <RegistrationInfo />
      </section>
    </div>
  )
}
