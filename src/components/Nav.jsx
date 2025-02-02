import Navsvg from "../icons/Navsvg";

export default function Nav(){



    return(
        <>
       
       <div className="bg-main-blue h-20 ">
      <header className="mx-24 bg-nav-bg relative top-3 flex justify-between items-center p-2 shadow-md rounded-full">
        <div className="text-2xl font-bold text-indigo-600"><Navsvg></Navsvg></div>
        <nav className="flex space-x-5 text-gray-700 items-center">
          <a href="#" className="hover:text-indigo-600 font-bold text-sm">For Students</a>
          <a href="#" className="hover:text-indigo-600 text-xs">For Tutors/Institutes</a>
          <a href="#" className="hover:text-indigo-600 text-button text-xs">Pricing</a>
          <a href="#" className="hover:text-indigo-600 text-button text-xs">Blog</a>
          <a href="#" className="hover:text-indigo-600  text-button text-xs">Community</a>
        </nav>
        <div className="flex space-x-4">
          <button className="border-button border-2 py-1 px-4 rounded-full ">Login</button>
          <button className="bg-button py-2 px-4 rounded-full text-white">Schedule a Call</button>
        </div>
      </header>
      </div>
      
        </>
    );
}