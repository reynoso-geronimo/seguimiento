import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex flex-row  items-center justify-around pt-3"><Link href={'/'}>Servicios</Link > <Link href={'/'}>Vehiculos</Link></nav>
  )
}

export default Nav