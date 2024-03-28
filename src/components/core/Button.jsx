import React from 'react'

const Button = ({
	text = '',
	icon,
	onClick = () => { },
	disabled = false,
	...props
}) => {
	return (
		<button
			className={`w-full flex justify-center items-center gap-1 py-[14px] px-[18px] rounded-lg border border-[#202021] bg-[#121212] hover:bg-[#181818] transition-all duration-300 text-[#999999] uppercase ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
			onClick={onClick}
			{...props}
		>
			{icon &&
				<div className='w-5 h-5'>
					{icon}
				</div>
			}
			<p className='text-sm font-medium mb-px'>
				{text}
			</p>
		</button>
	)
}

export default Button