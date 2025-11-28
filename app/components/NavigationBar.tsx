import { useState } from "react";

export default function NavigationBar(): React.ReactElement {
  const [showMenu, setShowMenu] = useState(false);

  return(<header className="bg-red-900 fixed top-0 left-0 right-0 z-50">
       <nav className='flex align-middle'>
          <a onClick={() => setShowMenu(!showMenu)} className="my-auto mx-5 text-white! cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </a>
          <h2 className="my-auto! block h-auto">D&D BEYOND COMPANION</h2>
          <a href="/profile" className='rounded-full overflow-hidden h-15 w-15 m-3'>
            <img src="https://picsum.photos/200/300" />
          </a>
        </nav>
        <ul className={`overflow-hidden transition-all duration-1000 ${showMenu ? "opacity-100 h-15 " : "opacit-0 h-0"}`}>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/campaign">Campaign</a></li>
        </ul>
      </header>);
}