import IconBriefcase from 'components/icons/IconBriefcase'
import React from 'react'

const SectionHeader = ({
	icon = <IconBriefcase />,
	headline = '',
	tagline = '',
	children
}) => {
	return (
		<div className='Xsticky top-[78px] w-full flex flex-col gap-1 pb-4 border-b border-dashed border-[#202021] bg-[#050505]'>
			<div className='flex items-centerX gap-1'>
				<div className='w-6 h-6 mt-1.5'>
					{icon}
				</div>
				<p className=' font-bold text-2xl'>
					{headline}
				</p>
			</div>
			{tagline &&
				<p className='text-sm font-medium text-[#999999]'>
					{tagline}
				</p>
			}
			{children || ''}
		</div>
	)
}

export default SectionHeader