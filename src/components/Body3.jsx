export default function Body3(){



    return(
        <>
         <div className="flex justify-center mt-12">
        <div>
            <div className="flex justify-center p-1">
        <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Platform For Educators</button>
        </div>
        <div className="flex justify-center p-1 text-2xl text-button font-bold">
        Powerful Tools for Teachers & Administrators
        </div>
        <div className="flex justify-center p-1 text-xs text-button"> 
        Empowering teachers and admins with AI-driven real-time actionable insights to make learning data-driven.
        </div>
        </div>
        </div>



        <ul className="flex justify-evenly  mx-44 tracking-tighter text-xs font-semi-bold mt-4 my-2  rounded text-slate-600 ">
            <li className="bg-slate-300 px-4 rounded-lg text-button">Plug and Play</li>
            <li>Analyze performance</li>
            <li>Ai recommendations</li>
            <li>Custom Branding</li>
            <li>Grow Buisness</li>
            <li>Publish your mock</li>
            <li>Schedule Tests</li>

        </ul>


        <div className="flex justify-center">
        <div className="flex justify-evenly items-center px-8 w-[700px] h-96 bg-gray-100 rounded-3xl shadow-xl">
        <div>
            <h1 className="font-semibold my-2">Get started in 10 minutes</h1>
            <h2 className="text-button leading-5">Ready-to-use platform with prebuilt mock,<br></br>sectional and diagnostics tests.</h2>
        </div>
        <img  className='h-64 w-72' src="/single2.avif" alt="" />
        </div>
        </div>
        <div className="flex justify-center">
        <button className="bg-button py-1 mt-3 px-4 rounded-full text-white ">Learn more</button>
        </div>



        <div className="flex justify-center mt-12">
        <div>
            <div className="flex justify-center p-1">
        <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Blogs</button>
        </div>
        <div className="flex justify-center p-1 text-2xl text-black font-bold">
        Read our blogs
        </div>
        </div>
        </div>



        <div className="flex  justify-evenly mt-4">
            <div className="w-60 h-72 rounded-xl  flex flex-col shadow-2xl">
                <img src="card1.avif" className="rounded-xl w-full" alt="" />
                <h1 className="p-2 font-semibold">Master the digital SAT: Understanding how multi-stage adaptive testing works</h1>
                <h3 className="p-2 text-slate-400 text-sm">Feb 8,2024</h3>
                <h4 className="text-xs px-2 ">Read more</h4>

            </div>

            <div className="w-60 h-72 rounded-xl  flex flex-col shadow-2xl">
                <img src="card2.avif" className="rounded-xl w-full" alt="" />
                <h1 className="p-2 font-semibold">Gamify your digital SAT prep: Mastering with learnQ.ai's play and practice games</h1>
                <h3 className="p-2 text-slate-400 text-sm">Jan 30,2024</h3>
                <h4 className="text-xs px-2 ">Read more</h4>

            </div>

            <div className="w-60 h-72 rounded-xl  flex flex-col shadow-2xl">
                <img src="card1.avif" className="rounded-xl w-full" alt="" />
                <h1 className="p-2 font-semibold">Ace the digital SAT with learnq.ai diagnostic test:fast accurate and insightful</h1>
                <h3 className="p-2 text-slate-400 text-sm">jan 24,2024</h3>
                <h4 className="text-xs px-2 ">Read more</h4>
            </div>
        </div>

        <div className="bg-discord-blue h-80 flex justify-center gap-x-5 items-center mt-10" >
            <div>
        <img src="/discord.avif" className="h-60 shadow-2xl rounded-3xl" alt="" />
            </div>
            <div>
                <p className="text-xs my-2 text-gray-300">Connect with Top SAT Achievers</p>
                <h1 className="text-3xl my-1 text-white font-bold">Join our Thriving<br></br> Discord Community</h1>
                <button className="border-button bg-white border-2 py-1 px-5 rounded-full ">Login</button>
            </div>
        </div>



        </>





        
    );
}