import {Search, MessageCircleMore , ChevronLeft, ChevronRight, User} from "lucide-react"

type Props = {
    search: string;
    setSearch:(value:string) => void
}

export default function TopBar({search, setSearch}: Props){
    return(
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full bg-[#1F1F1F] hover:bg-[#2A2A2A]"><ChevronLeft /></button>
                <button className="p-2 rounded-full bg-[#1F1F1F] hover:bg-[#2A2A2A]"><ChevronRight /></button>

                <div className="relative ml-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search any movies..." className="pl-10 pr-4 w-72 bg-[#1F1F1F] rounded-full text-sm, text-white placeholder-gray-400 focus:outline-none py-2"/>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 cursor-pointer rounded-full bg-[#1F1F1F] hover:bg-[#2A2A2A]">
                    <MessageCircleMore />
                </button>
                <button className="p-2 cursor-pointer rounded-full bg-[#1F1F1F] hover:bg-[#2A2A2A]">
                    <User />
                </button>
            </div>

        </div>
    )
} 