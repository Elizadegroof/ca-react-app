import Link from "next/link"

export default function Layout ({ children }) {
return (
<>
<nav>
<Link href="/">Home</Link>
<Link href="/passes">Passes</Link>
</nav>
<main>{children}</main>

</>
)
}
