import Logo from 'components/Logo'
import React from 'react'


const Navbar = () => {
	return (
		<div className='sticky top-0 z-10 w-full flex items-center h-12 md:h-14 border-b border-[#202021] bg-[#050505]'>
			<div className='container flex items-center justify-between'>
				<Logo />
			</div>
		</div>
	)
}

export default Navbar