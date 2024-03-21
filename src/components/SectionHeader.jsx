import IconBriefcase from 'components/icons/IconBriefcase'
import React from 'react'

const SectionHeader = ({
	icon = <IconBriefcase />,
	headline = '',
	tagline = '',
}) => {
	return (
		<div className='w-full flex flex-col gap-1 pb-4 border-b border-dashed border-[#202021]'>
			<div className='flex items-center gap-1'>
				{icon}
				<p className=' font-bold text-2xl'>
					{headline}
				</p>
			</div>
			{tagline &&
				<p className='text-sm font-medium text-[#999999]'>
					{tagline}
				</p>
			}
		</div>
	)
}

export default SectionHeader