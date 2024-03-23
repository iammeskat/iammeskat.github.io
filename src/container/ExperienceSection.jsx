import ExperienceCard from 'components/ExperienceCard'
import SectionHeader from 'components/SectionHeader'
import IconBriefcase from 'components/icons/IconBriefcase'
import React from 'react'
import { experienceData } from 'utils/data'

const ExperienceSection = () => {
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconBriefcase />}
				headline='My Experience'
				tagline='Expertly navigating diverse tech environments to deliver holistic solutions.'
			/>
			<div className='w-full flex flex-col gap-6'>
				{experienceData.map((item, indx) => (
					<ExperienceCard
						key={`ex-${indx}`}
						data={item}
					/>
				))}
			</div>
		</div>
	)
}

export default ExperienceSection