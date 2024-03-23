import MyLogo from 'components/core/MyLogo'
import React from 'react'

const Logo = () => {
	return (
		<div className="relative w-24 md:w-36 h-auto text-[#999999]">
			<MyLogo />
			<p className='absolute -top-2 -right-10 text-xs'>V3 Alpha</p>
		</div>
	)
}

export default Logo