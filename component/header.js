import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
    return (
        <div>
            <nav>
                <Image src="/images/logo.png" width={128} height={77} />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/element">Element</Link>

            </nav>
        </div>
    );
}