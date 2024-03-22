import React from 'react';

const ExperienceCard = ({ data = {} }) => {
	const {
		employer,
		employerType,
		web,
		webLabel,
		logo,
		period,
		designation,
		description,
	} = data;
	return (
		<div className='w-full flex flex-col gap-6 p-4 sm:p-6 rounded-xl border border-[#141415] bg-[#0a0a0b]'>
			<div className='w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4'>
				<div className='flex items-center gap-2'>
					<div className='w-[46px] min-w-[46px] h-[46px] flex items-center justify-center p-1 rounded-lg border border-[#202021] bg-[#19191a]'>
						<img
							className='w-[30px] h-[30px]'
							src={logo}
							alt={employer}
						/>
					</div>
					<div className='grow flex flex-col'>
						<div className='w-full sm:w-auto flex justify-between sm:justify-start sm:items-center gap-1'>
							<p className='text-lg font-medium text-[#d9d9d9]'>
								{employer}
							</p>
							<div className='h-fit px-[10px] py-1 rounded-full border border-[#141415] bg-[#0f0f10] text-[#999999] text-xs font-medium'>
								{employerType}
							</div>
						</div>
						<a
							className='text-sm font-medium text-[#999999] hover:text-blue-500'
							href={web}
							target='_blank'
							rel='noreferrer'
						>
							{webLabel}
						</a>
					</div>
				</div>
				<div className='py-2 sm:py-0 border-y sm:border-y-0 border-[#141415]'>
					<p className='text-xl font-bold text-[#d9d9d9]'>
						{period}
					</p>
				</div>
			</div>
			<div className='w-full flex flex-col gap-1 p-4 rounded-lg border border-[#141415] bg-[#050505]'>
				<p className='font-medium text-[#d9d9d9]'>
					{designation}
				</p>
				<p className='text-sm font-medium text-[#999999]'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ExperienceCard