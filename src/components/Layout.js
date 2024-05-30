import Link from "next/link"

export default function Layout ({ children }) {
return (
<>
<nav>
<Link href="/">Home</Link>
<Link href="/passes">Passes</Link>
<Link href="/challenges">Challenges</Link>
<Link href="/Hamburger"></Link>
</nav>
<main>{children}</main>

</>
)
}
