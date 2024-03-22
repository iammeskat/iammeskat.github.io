import React from 'react'
import IconLink from './icons/IconLink'

const ProjectCard = () => {
	return (
		<div className='w-full flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-4 md:gap-6 p-4 rounded-xl border border-[#141415] bg-[#0a0a0b]'>
			<img
				className='w-full xs:w-[324px] xs:min-w-[300px] h-auto aspect-video rounded-xl object-cover object-top'
				src="https://framerusercontent.com/images/34CNONDmkqhYuIXHQCjxqCbWjDQ.png?scale-down-to=512"
				alt='project'
			/>
			<div className='w-full md:w-auto md:grow flex flex-col justify-between gap-4'>
				<div className='w-full flex flex-col gap-4'>
					<div className='w-full flex flex-col xs:flex-row justify-between items-center gap-2'>
						<a
							className=' text-xl font-medium hover:text-blue-500'
							href="https://ostad.app"
							target="_blank"
							rel="noreferrer"
						>
							Ostad LMS V2
						</a>
						<div>
							<a
								className='w-full flex justify-center items-center gap-1 px-3 py-1 rounded-full border border-[#141415] bg-[#121212] hover:bg-[#181818] transition-all duration-300 text-[#999999] hover:text-blue-500'
								href="https://ostad.app"
								target="_blank"
								rel="noreferrer"
							>
								<div className='w-4 h-4'>
									<IconLink />
								</div>
								<p className='text-sm font-medium mb-0.5'>
									ostad.app
								</p>
							</a>
						</div>
					</div>

					<div className='w-full flex flex-wrap justify-center xs:justify-start items-center gap-2 xs:gap-4 py-3 border-y text-[#999999] border-[#141415]'>
						<p className='text-sm font-medium '>
							Portfolio
						</p>
						•
						<p className='text-sm font-medium'>
							4 Pages
						</p>
						•
						<p className='text-sm font-medium'>
							Dark Theme
						</p>
					</div>
				</div>

				<p className='text-sm font-medium text-[#999999]'>
					Showcasing expertise, passion, and innovation in the realm of development.
				</p>
			</div>
		</div>
	)
}

export default ProjectCard