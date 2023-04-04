import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5 font-ikaros '>
        <div className='flex items-center space-x-2 '>
            <Link href='/'>
                {/* <Image 
                    src='https://media.licdn.com/dms/image/D5603AQEjuQdDUmTpYg/profile-displayphoto-shrink_400_400/0/1672573015293?e=1679529600&v=beta&t=2YLGwVOWGthHS0boDBjXNcGi2L4LBk3OB-HzCp87hok'
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt='logo'
                /> */}
                <Image 
                    src='/ProfilePic.jpg'
                    alt = 'logo'
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-[#dead4f]"

                />
            </Link>
            <h1 className='text-2xl dark:text-white tracking-wider'>Blog.</h1>
        </div>
        <div>
            <Link  
                href='https://portfolio.roshanjagadish.tech/'
                className = "px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7Ab0A] flex items-center rounded-full text-center"
                target={'_blank'}
            >
                Check out my portfolio!
            </Link>
        </div>
    </header>
  )
}

export default Header