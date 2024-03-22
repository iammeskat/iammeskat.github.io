import React from 'react'

const StackCard = ({
	icon = '',
	name = '',
	description = ''
}) => {
	return (
		<div className='w-full flex items-center gap-2 p-2 rounded-xl border border-[#141415] bg-[#0a0a0b] hover:bg-[#121212] transition-all duration-300'>
			<div className='w-[46px] h-[46px] flex items-center justify-center p-1 rounded-lg border border-[#202021] bg-[#19191a]'>
				<img
					className='w-[30px] h-[30px]'
					src='https://raw.githubusercontent.com/iammeskat/iammeskat.github.io/b5d4689a01ed5a27bfe43d411cedf28b4e4bc8c2/public/images/laravel.svg'
					alt='ostad'
				/>
			</div>

			<div className='flex flex-col'>
				<p className='font-medium text-[#d9d9d9]'>
					{name}
				</p>
				<p className='text-sm font-medium text-[#999999]'>
					ostad.app
				</p>
			</div>

		</div>
	)
}

export default StackCard