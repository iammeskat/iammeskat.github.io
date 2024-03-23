import React from 'react';
import IconLink from './icons/IconLink';

const ProjectCard = ({ data = {} }) => {
	const { name, url, technologies, description, photo } = data;
	return (
		<div className='w-full flex flex-col md:flex-row md:even:flex-row-reverse items-center gap-4 md:gap-6 p-4 rounded-xl border border-[#141415] bg-[#0a0a0b]'>
			<img
				className='w-full xs:w-[324px] xs:min-w-[300px] h-auto aspect-video rounded-xl object-cover object-top bg-[#121212]'
				src={photo}
				alt={name}
				loading="lazy"
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
							{name}
						</a>
						<div>
							<a
								className='w-full flex justify-center items-center gap-1 px-3 py-1 rounded-full border border-[#141415] bg-[#121212] hover:bg-[#181818] transition-all duration-300 text-[#999999] hover:text-blue-500'
								href={`https://${url}`}
								target="_blank"
								rel="noreferrer"
							>
								<div className='w-4 h-4'>
									<IconLink />
								</div>
								<p className='text-sm font-medium mb-0.5'>
									{url}
								</p>
							</a>
						</div>
					</div>

					<div className='w-full  py-3 border-y text-[#999999] border-[#141415]'>
						<p className='text-sm font-medium  text-[#999999]'>
							{technologies}
						</p>
					</div>
				</div>

				<p className='text-sm font-medium text-[#999999]'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ProjectCard