import Button from 'components/core/Button'
import IconDownArrow from 'components/icons/IconDownArrow'
import IconEnvelop from 'components/icons/IconEnvelop'
import React from 'react'
import { track } from 'utils/apis'
import { personalData } from 'utils/data'

const Hero = () => {
	const { name, about, greetings, avatar, email, cv } = personalData;
	return (
		<div
			id="section-home"
			className='w-full pt-12 sm:pt-16 md:pt-20'
		>
			<div className='container flex flex-col gap-8'>
				<div className='container flex flex-col md:flex-row items-center gap-8'>
					<img
						className='w-[200px] h-auto smx:w-[260px] smx:min-w-[260px] rounded-xl bg-[#121212] object-cover aspect-[4/5]'
						src={avatar}
						alt='avatar'
					>

					</img>
					<div className='grow max-w-[500px] md:max-w-none flex flex-col items-center md:items-start gap-5'>
						<div className='flex flex-col items-center md:items-start gap-2'>
							<div className='flex flex-col items-center md:items-start'>
								<p className='text-lg font-medium text-[#999999]'>
									{greetings}
								</p>
								<p className='text-center text-4xl font-bold'>
									{name}
								</p>
							</div>
							<p className='text-center md:text-start text-[#999999]'>
								{about}
							</p>
						</div>
						<div className='w-full grid grid-cols-1 smx:grid-cols-2 gap-4'>
							<a
								className='w-full'
								href={`mailto:${email}`}
							>
								<Button
									text='Email me'
									icon={<IconEnvelop />}
									onClick={() => track('email-me-button', { from: 'hero' })}
								/>
							</a>
							<a
								className='w-full'
								href={cv}
								target='_blank'
								rel='noreferrer'
							>
								<Button
									text='Download cv'
									icon={<IconDownArrow />}
									onClick={() => track('download-cv-button', { from: 'hero' })}
								/>
							</a>
						</div>
					</div>
				</div>
				{/* <GhGraph /> */}
			</div>
		</div>
	)
}

export default Hero