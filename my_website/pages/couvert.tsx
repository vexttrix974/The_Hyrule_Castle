import NavBar from './header'
import { useEffect } from 'react'
import Accesoire from '../components/accesoires'

export default function couvert() {
  useEffect(() => {
    document.title = 'Couvert & Accessoires'
  }, [])
  return (
    <div>
      <NavBar />
      <Accesoire />
    </div>
  )
}
