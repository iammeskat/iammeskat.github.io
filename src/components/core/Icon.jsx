import React from 'react'

const Icon = ({
	src = '', alt = '', rounded = false, children = null
}) => {
	return (
		<div className='w-[46px] min-w-[46px] h-[46px] max-h-[46px] min-h-[46px] flex items-center justify-center p-1 rounded-lg border border-[#202021] bg-[#19191a]'>
			{children ? (
				<div className='w-[30px] h-[30px]'>
					{children}
				</div>
			) : (
				<img
					className={`w-[30px] h-[30px] ${rounded ? 'rounded-full object-cover' : ''} `}
					src={src}
					alt={alt}
					loading="lazy"
				/>
			)}
		</div>
	)
}

export default Icon