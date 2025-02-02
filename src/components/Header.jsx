export default function Header(){


    return(
        <>
            <div className="bg-gradient-to-b from-blue-100 to-main-gradiant  p-8 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 m-14">
          <h1 className="text-5xl font-bold text-gray-900">Learn Smarter, with Personalization</h1>
          <p className="mt-4 text-gray-600">Understand your learning journey</p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="bg-button py-2 px-4 rounded-full text-white">Try It Now</button>
            <button className="border-button border-2 py-1 px-4 rounded-full">Join our Discord</button>
          </div>
          <ul className="flex items-center gap-x-3 ">
          <li><img className='h-8 w-40 my-5' src="/X4sHrMtePsNHCGcfeqWSHBkpGOw.avif" alt="" /></li>
          <li><img className='h-10 w-14 my-5' src="B6Y6cJxh8nJdmPeP0y133qZ4.webp" alt="" /></li>
          <li><img className='h-12 w-22 my-5' src="OFvsfAoTLucJey6oVGGEZjDoo.avif" alt="" /></li>
          <li><img className='h-7 w-20 my-5' src="cmyxfgxMnc2Z4iBO1Dlr8TSVhZw.webp" alt="" /></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <span className="text-gray-500"><img className='h-80 w-80' src="89NqXj6dcBYEi5DSjRehVEL6rgY (1).avif" alt="" /></span>
        </div>
      </div>
    </div>
    {/*bottom section*/}
    <div className="bg-main-gradient ">
      {/* Title */}
      <h1 className="font-bold text-center bg-main-gradiant">
        Loved by teachers and students in 190+ countries, endorsed by top SAT prep institutes
      </h1>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden py-4 bg-main-gradiant  ">
        <div className="flex space-x-16 animate-loop-scroll w-[200%] bg-main-gradiant">
          {/* Duplicate the set of images for seamless scrolling */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-16 bg-main-gradiant">
              <img className="h-8 w-20" src="/infinite scrolling/2YwjSrepvQa4YRdr0ZdQSUUW8uU.webp" alt="Logo 1" />
              <img className="h-8 w-20" src="/infinite scrolling/i8aCQuSkmfXQAJVEQL2Xphjsqfs.webp" alt="Logo 2" />
              <img className="h-8 w-10" src="/infinite scrolling/J1pKW0kddN5OnftuInSdX5bTicM.webp" alt="Logo 3" />
              <img className="h-8 w-20" src="/infinite scrolling/JB9XPKHcHh7ajJTOxNVSoSFwMtU.webp" alt="Logo 4" />
              <img className="h-8 w-20" src="/infinite scrolling/KpcxxC9igYlG6Y43BpxMGUA.webp" alt="Logo 5" />
              <img className="h-8 w-20" src="/infinite scrolling/nVZeUMrZBl3zuNyOuLG2DBWLH64.webp" alt="Logo 6" />
              <img className="h-8 w-20" src="/infinite scrolling/pnukyrFh4TbZDwXIUuCIvJlNk.webp" alt="Logo 7" />
              <img className="h-8 w-20" src="/infinite scrolling/ZGQZf6EuoUOwACgYrhGxCRIeU1s.webp" alt="Logo 8" />
            </div>
          ))}
        </div>
      </div>
    </div>
        </>
    );
}