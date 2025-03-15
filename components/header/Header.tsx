import Image from 'next/image'
import Link from 'next/link'
import HeaderButtons from './buttons'

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3"> 
            <Link href="/">
                <Image src="/next.svg" alt="Logo" width={150} height={100} />    
            </Link>
            <HeaderButtons />
        </div>
    )
}