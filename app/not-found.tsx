import Link from "next/link"
import { TarpaCircle } from "@/components/motifs"

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-24 text-center">
      <TarpaCircle className="h-56 w-56 text-laterite/70" />
      <h1 className="mt-8 text-5xl">This path leads nowhere</h1>
      <p className="mt-3 text-lg text-soil/70">The page you are looking for has wandered off. Let us take you home.</p>
      <Link href="/" className="btn-primary mt-8 px-8 py-4 text-base">
        Back to Home
      </Link>
    </section>
  )
}
