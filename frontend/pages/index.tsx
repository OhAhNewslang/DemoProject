import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/hello1">
            <Image
            src="/CsrImage.png"
            width={500}
            height={300}
            alt="linkImage"
            >
            </Image>
      </Link>
      <Link href="/hello2">
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
