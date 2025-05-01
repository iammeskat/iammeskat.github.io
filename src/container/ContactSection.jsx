import SectionHeader from 'components/SectionHeader'
import SocialLinks from 'components/SocialLinks'
import Button from 'components/core/Button'
import IconChatBubble from 'components/icons/IconChatBubble'
import IconDownArrow from 'components/icons/IconDownArrow'
import IconEnvelop from 'components/icons/IconEnvelop'
import React, { useState } from 'react'
import { track } from 'utils/apis'
import { personalData } from 'utils/data'

const ContactSection = () => {
	const { email, cv } = personalData;
	const [formData, setFormData] = useState();
	const [loading, setLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);


	const handleOnChange = ({ target = {} }) => {
		const { name, value } = target;
		setFormData((prev) => ({
			...prev, [name]: value
		}));
		setIsSent(false);
	}

	const handleSendMessage = async (e) => {
		e.preventDefault();
		setLoading(true);
		await track('message', { message: formData });
		setTimeout(() => {
			setIsSent(true);
			setLoading(false);
		}, 1000);
	}

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
							onClick={() => track('email-me-button', { from: 'contact' })}
						/>
					</a>
					<a
						className='w-full xs:w-fit'
						href={cv}
						target='_blank'
						rel='noreferrer'
					>
						<Button
							text='Get Resume'
							icon={<IconDownArrow />}
							onClick={() => track('download-cv-button', { from: 'contact' })}
						/>
					</a>
				</div>
			</SectionHeader>
			<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4'>
				<div className='order-last w-full h-fit grid grid-cols-1 smx:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-[9px]'>
					<SocialLinks />
				</div>
				<form
					onSubmit={handleSendMessage}
					className='h-fit col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3'
				>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						placeholder='Name'
						name="name"
						onChange={handleOnChange}
						required
					/>
					<input
						className='p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						type="email"
						placeholder='Email'
						name="email"
						onChange={handleOnChange}
						required
					/>
					<textarea
						className='md:col-span-2 p-4 rounded-lg bg-[#0F0F10] focus:outline-0'
						rows={8}
						placeholder='Message'
						name="message"
						onChange={handleOnChange}
						required
					/>
					<div className='w-full md:col-span-2'>
						<Button
							type="submit"
							text={isSent ? "Message sent" : (loading ? "Message sending..." : "send message")}
							disabled={isSent}
						/>
					</div>
				</form>

			</div>
		</div>
	)
}

export default ContactSection