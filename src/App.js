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
			<div className='container flex flex-col'>
				<WrapSection id="section-experience">
					<ExperienceSection />
				</WrapSection>
				<WrapSection id="section-skill">
					<StackSection />
				</WrapSection>
				<WrapSection id="section-work">
					<ShowcaseSection />
				</WrapSection>
				<WrapSection id="section-contact">
					<ContactSection />
				</WrapSection>
			</div>
		</div>
	)
}

const WrapSection = ({ id, children }) => {
	return (
		<div
			id={id}
			className='w-full pb-12 sm:pb-16 md:pb-20'
		>
			{children}
		</div>
	)
}

export default App
