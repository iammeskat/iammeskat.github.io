import Footer from 'components/layout/Footer'
import Navbar from 'components/layout/Navbar'
import ContactSection from 'container/ContactSection'
import ExperienceSection from 'container/ExperienceSection'
import Hero from 'container/Hero'
import ShowcaseSection from 'container/ShowcaseSection'
import StackSection from 'container/StackSection'
import React from 'react'
import { useTrack } from 'utils/useTrack'

const App = () => {
	useTrack();
	return (
		<div className='w-full flex flex-col'>
			<Navbar />
			<Hero />
			<div className='container flex flex-col pb-2 sm:pb-6 md:pb-8'>
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
			<Footer />
		</div>
	)
}

const WrapSection = ({ id, children }) => {
	return (
		<div
			id={id}
			className='w-full pt-12 sm:pt-16 md:pt-20'
		>
			{children}
		</div>
	)
}

export default App
