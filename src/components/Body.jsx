import React from "react";

export default function Body(){



    return(
        <>
        <div className="flex justify-center mt-12">
        <div>
            <div className="flex justify-center p-1">
        <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">AI-powered Solution</button>
        </div>
        <div className="flex justify-center p-1 text-2xl text-button font-bold">
        Smart Learning: Fun, Engaging, Personalized and Driven by Data
        </div>
        <div className="flex justify-center p-1 text-xs text-button"> 
        Equipping teachers and students with AI tools to make the learning and teaching processes personalized, smarter, and more efficient.
        </div>
        </div>
        </div>


        <div className="flex justify-center items-center mx-20">
            <div className="ml-9 mt-9 m-3"><img className="h-60 w-[1200px] rounded-3xl shadow-2xl" src="/embeds/oaORlPetQFdx4ZoIT40Ejglsp28.gif" alt="" /></div>
            <div className="m-2">
            <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Gamification</button>
            <h1 className="text-3xl m-1 text-button font-bold">Learn by Playing Games</h1>
            <h2 className="text-sm mt-3">Game-based tests and quick quizzes with LearnQ make mastering topics fun and interactive. Plus, our smart AI plots your learning graph on the fly, showing you real-time learning insights.</h2>
            <button className="border-button border-2 py-1 px-4 rounded-full m-3 ">start playing</button>
                </div>
        </div>


        <div className="flex justify-center items-center mx-20">
            <div className="m-2">
            <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">DATA DRIVEN LEARNING</button>
            <h1 className="text-3xl m-1 text-button font-bold">Master Concepts in Data-driven Way</h1>
            <h2 className="text-sm mt-3">LearnQ's data-driven approach personalized your learning journey by using real-time scores for mastery, time-efficiency, accuracy, and potential score boosts—helping you master concepts smarter and faster.</h2>
            <button className="border-button border-2 py-1 px-4 rounded-full m-3 ">Explore Now</button>
            </div> 
         <div className="ml-9 mt-9 m-3"><img className="h-60 w-[1200px] rounded-3xl shadow-2xl" src="/embeds/ijqnnYRQ8LJ25kWUxTUKSTaZmfs.gif" alt="" /></div>
        
        </div>


        <div className="flex justify-center items-center mx-20">
            <div className="ml-9 mt-9 m-3"><img className="h-60 w-[1200px] rounded-3xl shadow-2xl" src="/embeds/r3wDi4JshVatziagOMncN3yOrvM.gif" alt="" /></div>
            <div className="m-2">
            <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">24X7 Assistance</button>
            <h1 className="text-3xl m-1 text-button font-bold">Resolve Your Doubts with Ask Mia</h1>
            <h2 className="text-sm mt-3">Dive into each question solution, understand your errors, and level up with similar practice questions. Plus, get instant tips and tricks with Mia - AI Tutor.</h2>
            <button className="border-button border-2 py-1 px-4 rounded-full m-3 ">Ask Mia Now</button>
                </div>
        </div>



        <div className="flex justify-center items-center mx-20">
            <div className="m-2">
            <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Personalization</button>
            <h1 className="text-3xl m-1 text-button font-bold">Understand Concepts in Fun and Engaging way with Mia</h1>
            <h2 className="text-sm mt-3">Learn topics in detail, grasp complex concepts in an exciting, adventure-filled way with Mia - Your AI Tutor.</h2>
            <button className="border-button border-2 py-1 px-4 rounded-full m-3 ">Try Mia Now</button>
            </div> 
         <div className="ml-9 mt-9 m-3"><img className="h-60 w-[1200px] rounded-3xl shadow-2xl" src="/embeds/personal.gif" alt="" /></div>
        
        </div>



        <div className="flex justify-center items-center mx-20">
            <div className="ml-9 mt-9 m-3"><img className="h-60 w-[1200px] rounded-3xl shadow-2xl" src="/embeds/r3wDi4JshVatziagOMncN3yOrvM.gif" alt="" /></div>
            <div className="m-2">
            <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Smart Learning</button>
            <h1 className="text-3xl m-1 text-button font-bold">Start with a Free Diagnostic Test to Craft your Study Plan!</h1>
            <h2 className="text-sm mt-3">Take our super accurate Diagnostic test to gauge your SAT score and receive a personalized study plan tailored to your needs.</h2>
            <button className="border-button border-2 py-1 px-4 rounded-full m-3 ">Create Your Study Plan</button>
                </div>
        </div>
        



        <div className="flex flex-col justify-center items-center mt-20">
        <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm text-center m-1">Smart Learning</button>
        <h1 className="m-1 text-2xl font-bold text-button">Loved by SAT Students across the Globe 🌎</h1>
        <button className="bg-button py-1 px-4 rounded-full text-white m-1">See the Wall of Love</button>
        </div>



  


<div className="flex items-center justify-evenly m-6">
      {/* First Column */}
      <div className="relative h-96 w-60 overflow-hidden">
        <div className="absolute flex flex-col gap-4 animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="scroll-item" src="/vertical scroll/thumbnail.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thumbnail 2.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thumbnail 3.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thumbnail 4.jpg" alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second Column */}
      <div className="relative h-96 w-60 overflow-hidden">
        <div className="absolute flex flex-col gap-4 animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="scroll-item" src="/vertical scroll/th1.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/th2.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/th3.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/th4.jpg" alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Third Column */}
      <div className="relative h-96 w-60 overflow-hidden">
        <div className="absolute flex flex-col gap-4 animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img className="scroll-item" src="/vertical scroll/thu1.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thu2.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thu3.jpg" alt="" />
              <img className="scroll-item" src="/vertical scroll/thu4.jpg" alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  



    
        </>
    );
}