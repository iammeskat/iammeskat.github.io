import React from 'react';
import { track } from 'utils/apis';
import Icon from './core/Icon';

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
		expertise,
	} = data;
	return (
		<div className='w-full flex flex-col gap-6 p-4 sm:p-6 rounded-xl border border-[#141415] bg-[#0a0a0b]'>
			<div className='w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4'>
				<div className='flex smx:items-center gap-2 mt-0.5 smx:mt-0'>
					<Icon
						src={logo}
						alt={employer}
						rounded
					/>
					<div className='grow flex flex-col'>
						<div className='w-full sm:w-auto flex flex-wrap justify-between sm:justify-start sm:items-center gap-1'>
							<a
								className='text-lg font-medium text-[#d9d9d9] hover:text-blue-500'
								href={web}
								target='_blank'
								rel='noreferrer'
								onClick={() => track('company-title', { employer })}
							>
								{employer} &nbsp;
								<span className='xs:hidden h-fit px-[10px] py-1 rounded-full border border-[#141415] bg-[#0f0f10] text-[#999999] text-xs font-medium'>
									{employerType}
								</span>
							</a>
							<span className='hidden xs:block h-fit px-[10px] py-1 rounded-full border border-[#141415] bg-[#0f0f10] text-[#999999] text-xs font-medium'>
								{employerType}
							</span>
						</div>
						<a
							className='text-sm font-medium text-[#999999] hover:text-blue-500'
							href={web}
							target='_blank'
							rel='noreferrer'
							onClick={() => track('company-link', { employer })}
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
				<p className='text-sm font-medium text-[#999999] text-justify'>
					{description}
				</p>
				<p className='text-sm font-medium text-[#999999]'>
					{expertise}
				</p>
			</div>
		</div>
	)
}

export default ExperienceCard