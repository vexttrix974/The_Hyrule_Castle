import NavBar from './header'
import Footer from './footer'
import { useEffect } from 'react'
import Image from 'next/image'
export default function APropos() {
  useEffect(() => {
    document.title = 'A Propos'
  }, [])
  return (
    <div>
      <NavBar />
      <div className="apropos">
        {' '}
        <Image
          id="apropos"
          src={'/Apropos.png'}
          alt="Grento Logo with sticks and point and circle"
          width={2448}
          height={1600}
        />{' '}
        <br />
        <strong>Ouvrir une lunch box greento,</strong>
        <p>
          C'est s'ouvrir à une nouvelle cuisine : celle des autres mais aussi et surtout la vôtre, plus saine, plus
          équilibrée et toujours riche de mille saveurs.
        </p>
        <p>C'est s'ouvrir à un monde avec moins de déchets.</p>
        <p>C'est ouvrir un bento pensé pour durer, avec un design qui vous ressemble. </p>
      </div>
      <Footer />
    </div>
  )
}
