import IconDownArrow from 'components/icons/IconDownArrow'
import IconEnvelop from 'components/icons/IconEnvelop'
import React from 'react'

const Hero = () => {
	return (
		<div className='w-full py-20'>
			<div className='container flex items-center gap-8'>
				<img
					className=' w-[260px] min-w-[260px] h-[260px] rounded-xl bg-[#121212]'
					src='/images/avatar.jpg'
					alt='avatar'
				>

				</img>
				<div className='grow flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col'>
							<p className='text-lg font-medium text-[#999999]'>
								👋Hello I'm
							</p>
							<p className=' text-4xl font-bold'>
								Meskatul Islam
							</p>
						</div>
						<p className=' text-[#999999]'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, illo voluptates maiores aliquam molestiae dolore fugiat
						</p>
					</div>
					<div className='w-full grid grid-cols-2 gap-4'>
						<button className='w-full flex justify-center items-center gap-1 py-[14px] px-[18px] rounded-lg border border-[#202021] bg-[#121212] hover:bg-[#181818] transition-all duration-300 text-[#999999]'>
							<IconEnvelop size='20px' />
							<p className='text-sm font-medium mb-px'>EMAIL ME</p>
						</button>
						<button className='w-full flex justify-center items-center gap-1 py-[14px] px-[18px] rounded-lg border border-[#202021] bg-[#121212] hover:bg-[#181818] transition-all duration-300 text-[#999999]'>
							<IconDownArrow size='20px' />
							<p className='text-sm font-medium mb-px'>DOWNLOAD CV</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero