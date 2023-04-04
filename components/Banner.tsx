
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 
    justify-between font-bold px-10 py-5 mb-10 font-ikaros ">
        <div>
            <h1 className="text-7xl mb-5 dark:text-[#dead4f] tracking-wider "> Roshan's Blog </h1>
            <h2 className="mt-5 ml-2 text-xl dark:text-white tracking-wide">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">
                    Roshan's Daily Blog
                </span>
                {" "}which contains cool tech stuff!
            </h2>

        </div>
        <div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New to this blog? Check out my latest post! | Don't forget to follow my socials!
        </p>
        
        </div>
    </div>
  )
}

export default Banner