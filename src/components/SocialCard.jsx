import React from 'react';
import IconArrowRight from './icons/IconArrowRight';

const SocialCard = ({ data = {} }) => {
	const { icon, name, des, link } = data;
	return (
		<a
			className='group w-full flex justify-between items-center gap-2 p-2 rounded-xl border border-[#141415] bg-[#0a0a0b] hover:bg-[#121212] transition-all duration-300 cursor-pointer overflow-hidden'
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<div className='flex items-center gap-2'>
				<div className='w-[46px] h-[46px] flex items-center justify-center p-1 rounded-lg border border-[#202021] bg-[#19191a]'>
					<div className='w-[30px] h-[30px]'>
						{icon}
					</div>
				</div>

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