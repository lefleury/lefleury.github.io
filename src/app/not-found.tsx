import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h1>Page introuvable</h1>
      <p>La page demandée n’existe pas.</p>
      <p>
        <Link href="/">Retour à l’accueil</Link>
      </p>
    </main>
  )
}
