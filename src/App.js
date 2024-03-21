import ExperienceSection from 'container/ExperienceSection'
import Hero from 'container/Hero'
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div className='w-full flex flex-col'>
			<Navbar />
			<Hero />
			<div className='container flex flex-col gap-20'>
				<ExperienceSection/>
				<ExperienceSection/>
				<ExperienceSection/>
				<ExperienceSection/>
			</div>
		</div>
	)
}

export default App
