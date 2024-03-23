import React from 'react';
import Icon from './core/Icon';

const StackCard = ({ data = {} }) => {
	const { icon, name, des } = data;
	return (
		<div className='w-full flex Xitems-center gap-2 p-2 rounded-xl border border-[#141415] bg-[#0a0a0b] hover:bg-[#121212] transition-all duration-300'>
			<Icon
				src={icon}
				alt='ostad'
			/>

			<div className='flex flex-col pb-1'>
				<p className='font-medium text-[#d9d9d9]'>
					{name}
				</p>
				<p className='text-sm font-medium text-[#999999]'>
					{des}
				</p>
			</div>

		</div>
	)
}

export default StackCard