import Logo from 'components/Logo'
import React from 'react'


const Navbar = () => {
	return (
		<div className='sticky top-0 z-10 w-full flex items-center h-12 md:h-14 border-b border-[#202021] bg-[#050505]'>
			<div className='container flex items-center justify-between'>
				<Logo />
				<ul className='hidden smx:flex items-center gap-2 text-xs font-medium'>
					<li className='hover:text-blue-500 cursor-pointer transition-all duration-300'>Home</li>
					<li className='hover:text-blue-500 cursor-pointer transition-all duration-300'>Experience</li>
					<li className='hover:text-blue-500 cursor-pointer transition-all duration-300'>Skill</li>
					<li className='hover:text-blue-500 cursor-pointer transition-all duration-300'>Work</li>
					<li className='hover:text-blue-500 cursor-pointer transition-all duration-300'>Contact</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar