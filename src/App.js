import ContactSection from 'container/ContactSection'
import ExperienceSection from 'container/ExperienceSection'
import Hero from 'container/Hero'
import ShowcaseSection from 'container/ShowcaseSection'
import StackSection from 'container/StackSection'
import React from 'react'
import { useTrack } from 'utils/useTrack'
import Navbar from './components/Navbar'

const App = () => {
	useTrack();
	return (
		<div className='w-full flex flex-col pb-12 sm:pb-16 md:pb-20'>
			<Navbar />
			<Hero />
			<div className='container flex flex-col gap-12 sm:gap-16 md:gap-20'>
				<ExperienceSection />
				<StackSection />
				<ShowcaseSection />
				<ContactSection />
			</div>
		</div>
	)
}

export default App
