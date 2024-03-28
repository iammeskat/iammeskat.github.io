import Logo from 'components/Logo';
import IconBriefcase from 'components/icons/IconBriefcase';
import IconChatBubble from 'components/icons/IconChatBubble';
import IconCode from 'components/icons/IconCode';
import IconHome from 'components/icons/IconHome';
import IconStack from 'components/icons/IconStack';
import React from 'react';
import { Link } from 'react-scroll';
import { track } from 'utils/apis';
import { shallowRoute } from 'utils/heplers';
import { useRoute } from 'utils/useRoute';


const Navbar = () => {

	const isReady = useRoute();

	const handleRouteChange = (title = '') => {
		track(`nav-link-${title}`);
		shallowRoute(title)
	}

	return (
		<div className='sticky top-0 z-10 w-full flex items-center h-12 md:h-14 border-b border-[#202021] bg-[#050505]'>
			<div className='container flex items-center justify-between'>
				<Logo />
				<ul className='flex items-center gap-2 text-xs font-medium text-[#999999]'>
					{navItems.map((item, indx) => (
						<li
							key={`nav-item-${indx}`}
							className='p-1 rounded bg-[#121212] smx:p-0 smx:bg-transparent'
						>
							<Link
								to={item.to}
								offset={-80}
								spy
								activeClass='text-white'
								className='hover:text-blue-500 cursor-pointer transition-all duration-300'
								onClick={() => handleRouteChange(item.title)}
								onSetActive={() => {
									if (isReady) shallowRoute(item.title);
								}}
							>
								<div className='w-4 h-4 xs:w-5 xs:h-5 smx:hidden'>
									{item.icon}
								</div>
								<span className='hidden smx:block'>
									{item.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

const navItems = [
	{
		title: "Home",
		to: "section-home",
		icon: <IconHome />
	}, {
		title: "Experience",
		to: "section-experience",
		icon: <IconBriefcase />
	}, {
		title: "Skill",
		to: "section-skill",
		icon: <IconStack />
	}, {
		title: "Work",
		to: "section-work",
		icon: <IconCode />
	}, {
		title: "Contact",
		to: 'section-contact',
		icon: <IconChatBubble />,
	},
];

export default Navbar