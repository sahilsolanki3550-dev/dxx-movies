type Props = {
  setView: (view: "home" | "wishlist") => void;
};

export default function Sidebar({setView}:Props){
    return(
        <div className="w-60 bg-[#141414] p-6 flex flex-col justify-between h-screen">
            
            

            {/* New Feed */}
            <div>            
            <h1 className="mb-8 font-bold text-2xl">
                DXX.<span className="text-red-500">MOVIES</span> </h1>
            <div className="space-y-4">
                <ul className="space-y-2">
                    <li className="text-gray-400 hover:text-white cursor-pointer">New Feed</li>
                    <li onClick={()=>setView("home")} className="text-white font-semibold cursor-pointer">Browse</li>
                    <li onClick={()=>setView("wishlist")} className="text-gray-400 hover:text-white cursor-pointer">Watchlist</li>
                    <li className="text-gray-400 hover:text-white cursor-pointer">Remind</li>
                </ul>
            </div>
                
                {/* categories */}
                <div className="mt-8">
                    <p className="text-grey-400 mb-2">Categories</p>
                    <ul className="space-y-2 text-gray-400">
                        <li>Action</li>
                        <li>Horror</li>
                        <li>Adventure</li>
                        <li>animation</li>
                        <li>adventaure, action</li>
                        <li>SF, Adventure</li>
                        <li>Crime</li>
                        <li>Cartoon</li>
                        <li>War</li>
                        <li>Sport</li>
                        <li className="ml-5 cursor-pointer">View more</li>
                    </ul>
                </div>
                </div>

            {/* Logout */}
            <button className="text-grey-400 hover:text-white cursor-pointer">
                Logout
            </button>
        </div>
    )
}