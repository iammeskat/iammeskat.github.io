import SectionHeader from 'components/SectionHeader'
import StackCard from 'components/StackCard'
import IconStack from 'components/icons/IconStack'
import React from 'react'

const StackSection = () => {
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconStack />}
				headline='My Stack'
				tagline='Navigating diverse environments with adaptability and expertise for holistic solutions.'
			/>
			<div className='w-full grid grid-cols-3 gap-4'>
				<StackCard
					name="Node.js"
				/>
				<StackCard
					name="React.js"
				/>
				<StackCard
					name="Next.js"
				/>
				<StackCard
					name="Express.js"
				/>
				<StackCard
					name="Laravel"
				/>
				<StackCard
					name="Tailwind CSS"
				/>
				<StackCard
					name="MySQL"
				/>
				<StackCard
					name="MongoDB"
				/>
			</div>
		</div>
	)
}

export default StackSection