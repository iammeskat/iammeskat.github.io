import React from 'react';
import { track } from 'utils/apis';
import Icon from './core/Icon';
import IconArrowRight from './icons/IconArrowRight';

const SocialCard = ({ data = {} }) => {
	const { icon, name, des, link } = data;
	return (
		<a
			className='group w-full flex justify-between items-center gap-2 p-2 rounded-xl border border-[#141415] bg-[#0a0a0b] hover:bg-[#121212] transition-all duration-300 cursor-pointer overflow-hidden active:scale-95'
			href={link}
			target="_blank"
			rel="noreferrer"
			onClick={() => track('social-link', { platform: des })}
		>
			<div className='flex items-center gap-2'>
				<Icon>
					{icon}
				</Icon>

				<div className='flex flex-col'>
					<p className='font-medium text-[#d9d9d9]'>
						{name}
					</p>
					<p className='text-sm font-medium text-[#999999]'>
						{des}
					</p>
				</div>
			</div>
			<div className='text-[#999999] group-hover:-rotate-45 transition-all duration-300'>
				<IconArrowRight />
			</div>
		</a>
	)
}

export default SocialCard