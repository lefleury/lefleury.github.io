'use client'
import Link from 'next/link'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <main>
      <h1>Une erreur est survenue</h1>
      <p>{error.message}</p>
      <p>
        <Link href="/">Retour à l’accueil</Link>
      </p>
    </main>
  )
}
