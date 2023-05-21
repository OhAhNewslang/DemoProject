import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/csr">
            <Image
            src="/CsrImage.png"
            width={500}
            height={300}
            alt="linkImage"
            >
            </Image>
      </Link>
      <Link href="/ssr">
            <Image
            src="/SsrImage.png"
            width={500}
            height={300}
            alt="linkImage"
            >
            </Image>
      </Link>
    </div>
  )
}
