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
				tagline='Navigating diverse environments with adaptability and expertise for holistic solutions.'
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