import NavBar from './header'
import { useEffect } from 'react'
import Bouteilles from '../components/bouteille'

export default function bouteilles() {
  useEffect(() => {
    document.title = 'Bouteilles'
  }, [])
  return (
    <div>
      <NavBar />
      <Bouteilles />
    </div>
  )
}
