import MyLogo from 'components/core/MyLogo';
import IconBriefcase from 'components/icons/IconBriefcase';
import IconChatBubble from 'components/icons/IconChatBubble';
import IconCode from 'components/icons/IconCode';
import IconHome from 'components/icons/IconHome';
import IconStack from 'components/icons/IconStack';
import React from 'react';
import { Link } from 'react-scroll';


const Footer = () => {
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
	return (
		<footer className="flex flex-col  justify-center items-center bg-[#121212] p-2 text-[#62626f] text-xs">
			<div className="w-16 md:w-24 h-auto">
				<MyLogo />
			</div>
			<p className='text-center'>
				© {new Date().getFullYear()}, Design & developed by&nbsp;
				<Link
					activeClass="active"
					to="section-home"
					spy
					className="font-medium hover:text-blue-500 cursor-pointer underline"
				>
					Meskatul Islam
				</Link>
			</p>
		</footer>
	)
}

export default Footer