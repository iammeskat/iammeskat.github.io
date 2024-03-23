import SectionHeader from 'components/SectionHeader'
import SocialLinks from 'components/SocialLinks'
import Button from 'components/core/Button'
import IconChatBubble from 'components/icons/IconChatBubble'
import IconDownArrow from 'components/icons/IconDownArrow'
import IconEnvelop from 'components/icons/IconEnvelop'
import React from 'react'
import { personalData } from 'utils/data'

const ContactSection = () => {
	const { email, cv } = personalData;
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconChatBubble />}
				headline='I Love to here from you.'
				tagline="Connect with Me Today. Let's Create Something Amazing Together!"
			>
				<div className='flex flex-col xs:flex-row xs:items-center gap-4 mt-4 xs:mt-1'>
					<a
						className='w-full xs:w-fit'
						href={`mailto:${email}`}
						target='_blank'
						rel='noreferrer'
					>
						<Button
							text='Email me'
							icon={<IconEnvelop />}
						/>
					</a>
					<a
						className='w-full xs:w-fit'
						href={cv}
						target='_blank'
						rel='noreferrer'
					>
						<Button
							text='Download cv'
							icon={<IconDownArrow />}
						/>
					</a>
				</div>
			</SectionHeader>
			<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4'>
				<div className='order-last w-full h-fit grid grid-cols-1 smx:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-[9px]'>
					<SocialLinks />
				</div>
				<div className='h-fit col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3'>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						placeholder='Name'
						disabled
						title="Under developing"
					/>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						placeholder='Email'
						disabled
						title="Under developing"
					/>
					<textarea
						className='md:col-span-2 p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						rows={8}
						placeholder='Message'
						disabled
						title="Under developing"
					/>
					<div className='w-full md:col-span-2'>
						<Button
							text="send message"
						/>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ContactSection