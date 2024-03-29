import React from 'react'
import { socialLinks } from 'utils/data'
import SocialCard from './SocialCard'

const SocialLinks = () => {
	return (
		<>
			{socialLinks.map((item, indx) => (
				<SocialCard
					key={`social-link-${indx}`}
					data={item}
				/>
			))}
		</>
	)
}

export default SocialLinks