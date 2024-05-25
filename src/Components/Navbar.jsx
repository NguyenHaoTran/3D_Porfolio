import { NavLink } from "react-router-dom"


function Navbar() {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-blold shadow-md">
        <p className="blue-gradient_text">NH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-Neutra-900'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-neutra-900'}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar