export default function Footer(){





    

    return(
        <>
     <div className="flex justify-center mt-12">
        <div>
            <div className="flex justify-center p-1">
        <button className="bg-ai-button rounded-3xl px-6 text-button font-bold text-sm ">Question and Answers</button>
        </div>
        <div className="flex justify-center p-1 text-2xl text-button font-bold">
        FAQ's
        </div>
        </div>
        </div>



<div className="flex justify-center">
        <div className="border-button border-2 rounded-2xl h-[800px] w-[650px] flex flex-col justify-evenly">
            <h1 className=" text-button font-semibold px-10">+ how does learnQ utilize ai to enhance learning?</h1>
            <h1 className=" text-button font-semibold px-10">+ how does learnQsdiagnostic test utilize ai?</h1>
            <h1 className=" text-button font-semibold px-10">+ what are learnqs play and practice tests?</h1>
            <h1 className=" text-button font-semibold px-10">+ how does Mia the ai tutor,utilize ai to guid students?</h1>
            <h1 className=" text-button font-semibold px-10">+ whats included in the learnqs premium mock test package for the college board digital SAT?</h1>
            <h1 className=" text-button font-semibold px-10">+ what comprehensive tools and benifits does leanrQ offer to educational administrators?</h1>
            <h1 className=" text-button font-semibold px-10">+ Which exams are currently supported by LearnQ?</h1>
            <h1 className=" text-button font-semibold px-10">+ how do i get started with learnQ?</h1>
            <h1 className=" text-button font-semibold px-10">+ do i have to pay to get started to learning with learnQ?</h1>
            <h1 className=" text-button font-semibold px-10">+ how does learnQ utilize ai to enhance learning?</h1>
            <h1 className=" text-button font-semibold px-10">+ how does learnQ utilize ai to enhance learning?</h1>
            
        </div>
        </div>




      
        <footer className="bg-gradient-to-tr from-purple-50 to-blue-50 p-8 text-xs mt-16">
      <div className="grid grid-cols-5 gap-8 mb-8">
        {/* Features Section */}
        <div>
          <h2 className="text-purple-900 font-semibold mb-4">Features</h2>
          {['Diagnostic Test', 'Play & Practice', 'Mock Tests', 'Mia, AI Tutor', 'Digital SAT', 'Schools/Institutes'].map((item) => (
            <a key={item} href="#" className="block text-purple-700 mb-2">{item}</a>
          ))}
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-purple-900 font-semibold mb-4">Company</h2>
          {['About', 'Users Terms and Conditions', 'Enterprise Terms and Conditions', 'Privacy Policy', 'Pricing', 'Cookie Settings'].map((item) => (
            <a key={item} href="#" className="block text-purple-700 mb-2">{item}</a>
          ))}
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-purple-900 font-semibold mb-4">Resources</h2>
          {['Blogs', 'iOS App', 'Android App'].map((item) => (
            <a key={item} href="#" className="block text-purple-700 mb-2">{item}</a>
          ))}

          <div className="mt-8">
            <h3 className="text-purple-900 font-semibold mb-4">Download</h3>
            <img src="/google play.png" alt="Google Play" className="mb-2 w-20 h-7" />
          </div>
        </div>

        {/* Compare Section */}
        <div>
          <h2 className="text-purple-900 font-semibold mb-4">Compare</h2>
          {['CollegeBoard Bluebook', 'Khan Academy', 'Rtest.ai', 'UWorld', 'TestInnovators', 'Kaplan SAT', 'Acely.ai'].map((item) => (
            <a key={item} href="#" className="block text-purple-700 mb-2">{item}</a>
          ))}
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-purple-900 font-semibold mb-4">Support</h2>
          {['Contact', 'Join Discord Community', 'FAQ', 'Contact Sales', 'Request Demo', 'Try for Free'].map((item) => (
            <a key={item} href="#" className="block text-purple-700 mb-2">{item}</a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center">
        <div className="flex justify-center gap-4 mb-4">
          <img src="/discord icon" alt="" />
        </div>
        <p className="text-sm text-gray-600 mb-2">
          SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this site.
        </p>
        <p className="text-sm text-gray-600">© 2024 All rights reserved LearnQ Inc.</p>
      </div>
    </footer>


        </>
    );
}