import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/">Accueil</Link> | <Link href="/menus">Menus</Link> |{' '}
      <Link href="/a-propos">À propos</Link>
    </nav>
  )
}
