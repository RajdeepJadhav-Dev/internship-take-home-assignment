
import Star from '../icons/star'

export default function Body2(){




    return(
        <>
      
      <div className="h-[350px] bg-gradient-to-b w-full from-blue-100 to-main-gradiant flex ">
        <div>
         <h1 className="text-3xl text-green-text font-bold ml-28 mt-20">Campus <br></br>Ambassador<br></br> Program</h1>
        <div className="font-bold text-black tracking-tight ml-28 mt-3 bg-skin-color p-2 pr-0 rounded-2xl">Become an Official Ambassador!</div>
        </div>
        <div>
            <img className='h-72 ml-12 mt-14' src="/single.avif" alt="" />
        </div>
        <div className="pl-20 mt-20">
            <h1 className="text-3xl text-red-text tracking-tighter font-bold">Promote Us and Enjoy <br></br>Exclusive Rewards:</h1>
            <h2 className="mt-3 text-black">Earn Unlimited commissions, build your<br></br> personal brand, and boost your resume!<br></br>
Grow your network, gain experience, and get certified!</h2>
<button className="bg-blue-600 py-1 px-6 text-white m-3 rounded-3xl">Apply Now</button>
        </div>
      </div>



      <div className="bg-gradient-to-b w-full bg-main-gradiant flex justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex items-center text-3xl font-semibold ml-5">200K +</h1>
          <h2 className="text-xs text-button font-bold">Total Tests Taken</h2>
          <h3 className="text-xs ">Students Trust LearnQ.ai</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex items-center text-3xl font-semibold ml-5">73K +</h1>
          <h2 className="text-xs text-button font-bold">Doubts Answered</h2>
          <h3 className="text-xs ">By our Ai tutor Mia</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex items-center text-3xl font-semibold ml-5">139 +</h1>
          <h2 className="text-xs text-button font-bold">Countries</h2>
          <h3 className="text-xs ">Students love us Globally</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex items-center text-3xl font-semibold ml-5 ">4.9 <Star/></h1>
          <h2 className="text-xs text-button font-bold">Countries</h2>
          <h3 className="text-xs ">Students love us Globally</h3>
        </div>
      </div>
      <div className='bg-main-gradiant h-6'></div>


        </>
    );
}