import Image from 'next/image'
import Link from 'next/link'
import HeaderButtons from './buttons'

export default function Header() {
    return (
        <header className='w-full mb-10 bg-gray-600 rounded-2xl'>
            <div className="flex justify-between items-center p-3"> 
                <Link href="/">
                    <Image src="/next.svg" alt="Logo" width={150} height={100} />    
                </Link>
                <HeaderButtons />
            </div>
        </header>

    )
}