import ProjectCard from 'components/ProjectCard'
import SectionHeader from 'components/SectionHeader'
import Button from 'components/core/Button'
import IconCode from 'components/icons/IconCode'
import React, { useState } from 'react'
import { projectData } from 'utils/data'

const ShowcaseSection = () => {
	const [seeAll, setSeeAll] = useState(false);
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconCode />}
				headline='My Work & Contribution'
				tagline='Explore a collection of groundbreaking software projects,  quality, and impactful contributions.'
			/>
			<div className='w-full flex flex-col gap-6'>
				{(seeAll ? projectData : projectData.slice(0, 3)).map((project, indx) => (
					<ProjectCard
						key={`project-${indx}`}
						data={project}
					/>
				))}
				{projectData.length > 3 &&
					<div className='w-full Xmax-w-[200px] mx-auto'>
						<Button
							text={seeAll ? 'See less' : 'See more'}
							onClick={() => setSeeAll(!seeAll)}
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default ShowcaseSection