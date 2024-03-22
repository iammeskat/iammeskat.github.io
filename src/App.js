import ContactSection from 'container/ContactSection'
import ExperienceSection from 'container/ExperienceSection'
import Hero from 'container/Hero'
import ShowcaseSection from 'container/ShowcaseSection'
import StackSection from 'container/StackSection'
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div className='w-full flex flex-col pb-20'>
			<Navbar />
			<Hero />
			<div className='container flex flex-col gap-20'>
				<ExperienceSection />
				<StackSection />
				<ShowcaseSection />
				<ContactSection />
			</div>
		</div>
	)
}

export default App
