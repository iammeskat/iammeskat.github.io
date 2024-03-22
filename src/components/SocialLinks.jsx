import React from 'react'
import SocialCard from './SocialCard'
import IconFb from './icons/IconFb'
import IconGithub from './icons/IconGithub'
import IconIg from './icons/IconIg'
import IconLinkedin from './icons/IconLinkedin'
import IconX from './icons/IconX'

const SocialLinks = () => {
	return (
		<>
			<SocialCard
				data={{
					name: "iammeskat",
					des: 'GitHub',
					icon: <IconGithub />,
					link: 'https://github.com/iammeskat'
				}}
			/>
			<SocialCard
				data={{
					name: "meskat",
					des: 'LinkedIn',
					icon: <IconLinkedin />,
					link: 'https://linkedin.com/in/meskat'
				}}
			/>
			<SocialCard
				data={{
					name: "@M35K47",
					des: 'X (Twitter)',
					icon: <IconX />,
					link: 'https://twitter.com/m35k47'
				}}
			/>
			<SocialCard
				data={{
					name: "@M35K47",
					des: 'Facebook',
					icon: <IconFb />,
					link: 'https://facebook.com/m35k47'
				}}
			/><SocialCard
			data={{
				name: "meskatul.islam",
				des: 'Instagram',
				icon: <IconIg />,
				link: 'https://instagram.com/meskatul.islam'
			}}
		/>
		</>
	)
}

export default SocialLinks