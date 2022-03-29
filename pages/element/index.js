import Link from 'next/link'

export default function ElementsIndex () {
    return (
        <div>
            <h1>Elements (index page).. </h1>
            <Link href="/element/detail">Element Listing</Link>

        </div>
    );
}