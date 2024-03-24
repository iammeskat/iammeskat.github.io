import Logo from 'components/Logo';
import React from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
	const navItems = [
		{
			title: "Home",
			to: "section-home",
		}, {
			title: "Experience",
			to: "section-experience",
		}, {
			title: "Skill",
			to: "section-skill",
		}, {
			title: "Work",
			to: "section-work",
		}, {
			title: "Contact",
			to: "section-contact",
		},
	];
	return (
		<div className='sticky top-0 z-10 w-full flex items-center h-12 md:h-14 border-b border-[#202021] bg-[#050505]'>
			<div className='container flex items-center justify-between'>
				<Logo />
				<ul className='hidden smx:flex items-center gap-2 text-xs font-medium text-[#999999]'>
					{navItems.map((item, indx) => (
						<li key={`nav-item-${indx}`}>
							<Link
								to={item.to}
								offset={-80}
								spy
								activeClass='text-white'
								className='hover:text-blue-500 cursor-pointer transition-all duration-300'
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navbar