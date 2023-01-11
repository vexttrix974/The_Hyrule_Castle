import NavBar from './header'
import Footer from './footer'
import Image from 'next/image'
import Link from 'next/link'

export default function home() {
  return (
    <div>
      <NavBar />
      <div className="bannerHome">
        <div className="backgroundImage">
          <img src="/cuisine.png" alt=""></img>
        </div>
        <h1>Les valeur de Greento</h1>
        <p className="lorem1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, at. <br />
          Perspiciatis voluptatibus fugit suscipit architecto dolor temporibus, reiciendis tenetur impedit eius,
          <br />
          quos voluptatem? Hic, officia quaerat cumque iste modi officiis.
        </p>
        <p className="lorem2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, at. <br />
          Perspiciatis voluptatibus fugit suscipit architecto dolor temporibus, reiciendis tenetur impedit eius,
          <br />
          quos voluptatem? Hic, officia quaerat cumque iste modi officiis.
        </p>
        <p className="lorem3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, at. <br />
          Perspiciatis voluptatibus fugit suscipit architecto dolor temporibus, reiciendis tenetur impedit eius,
          <br />
          quos voluptatem? Hic, officia quaerat cumque iste modi officiis.
        </p>
        <h2>Nos produit</h2>
        <span>une petite selection de nos produit</span>
      </div>
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <Link href="/bento" target={'blank'}>
              <Image src="/bento  en bois.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/bento" target={'blank'}>
              <Image src="/bentoGlass.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/couvertPlastic.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/bento" target={'blank'}>
              <Image src="/bentoWood1.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/pailleSteel2.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/bouteilles" target={'blank'}>
              <Image src="/gourdeGlass2.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/pailleSteel3.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/couvertPlastic1.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/paillePlastic1.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
          <div className="slide">
            <Link href="/couvert" target={'blank'}>
              <Image src="/pailleSteel3.jpg" alt="" width={520} height={520} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
