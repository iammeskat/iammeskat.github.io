import SectionHeader from 'components/SectionHeader'
import StackCard from 'components/StackCard'
import IconStack from 'components/icons/IconStack'
import React from 'react'
import { skillData } from 'utils/data'

const StackSection = () => {
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconStack />}
				headline='My Stack'
				tagline='Dedicated to continuously mastering the latest technology trends and techniques in software engineering.'
			/>
			<div className='w-full grid grid-cols-1 smx:grid-cols-2 md:grid-cols-3 gap-4'>
				{skillData.map((skill, indx) => (
					<StackCard
						key={`skill-${indx}`}
						data={skill}
					/>
				))}
			</div>
		</div>
	)
}

export default StackSection