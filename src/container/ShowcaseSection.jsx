import ProjectCard from 'components/ProjectCard'
import SectionHeader from 'components/SectionHeader'
import IconCode from 'components/icons/IconCode'
import React from 'react'

const ShowcaseSection = () => {
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconCode />}
				headline='My Work & Contribution'
				tagline='Explore a collection of my most innovative and visually stunning design works.'
			/>
			<div className='w-full flex flex-col gap-6'>
				<ProjectCard/>
				<ProjectCard/>
			</div>
		</div>
	)
}

export default ShowcaseSection