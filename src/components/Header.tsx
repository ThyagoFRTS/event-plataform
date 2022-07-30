import { Logo } from "./svgs/Logo"
import Rukia from "./svgs/Rukia"


const Header = () => {
    return(
       <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 gap-1">
            <Rukia color="#ED4B82" height="90" width="100"/>
            <a className="text-2xl text-pink-300 font-bold">
                Event Plataform
            </a>
       </header>
    )
}

export default Header