import styles from './page.module.css'
import Contenido1Landing from '../../components/Contenido1Landing'
import Contenido2Landing from '../../components/Contenido2Landing'
import Contenido3Landing from '../../components/Contenido3Landing'
import Contenido4Landing from '../../components/Contenido4Landing'
import Contenido5Landing from '../../components/Contenido5Landing'
import Contenido6Landing from '../../components/Contenido6Landing'

export default function Home() {
  return (
    <main>
      <Contenido1Landing />
      <Contenido2Landing />
      <Contenido3Landing />
      <Contenido4Landing />
      <Contenido5Landing />
      <Contenido6Landing />
    </main>
  )
}
