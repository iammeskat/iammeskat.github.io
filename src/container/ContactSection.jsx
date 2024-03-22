import SectionHeader from 'components/SectionHeader'
import SocialLinks from 'components/SocialLinks'
import Button from 'components/core/Button'
import IconChatBubble from 'components/icons/IconChatBubble'
import IconDownArrow from 'components/icons/IconDownArrow'
import IconEnvelop from 'components/icons/IconEnvelop'
import React from 'react'

const ContactSection = () => {
	return (
		<div className='w-full flex flex-col gap-8'>
			<SectionHeader
				icon={<IconChatBubble />}
				headline='I Love to here from you.'
				tagline="Connect with Me Today. Let's Create Something Amazing Together!"
			>
				<div className='flex items-center gap-4 mt-1'>
					<div className='w-fit'>
						<Button
							text='Email me'
							icon={<IconEnvelop size='20px' />}
						/>
					</div>
					<div className='w-fit'>
						<Button
							text='Download cv'
							icon={<IconDownArrow size='20px' />}
						/>
					</div>
				</div>
			</SectionHeader>
			<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4'>
				<div className='md:order-last w-full h-fit grid grid-cols-1 smx:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-[9px]'>
					<SocialLinks />
				</div>
				<div className='h-fit col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3'>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						placeholder='Name'
					/>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						placeholder='Email'
					/>
					<textarea
						className='md:col-span-2 p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						rows={8}
						placeholder='Message'
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