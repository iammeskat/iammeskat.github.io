import React, { useEffect, useState } from 'react';
import { convertTo2DArray } from 'utils/heplers';


const GhGraph = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getContrubutions = async () => {
			const res = await fetch('https://github-contributions-api.jogruber.de/v4/iammeskat').catch(() => { });
			if (res?.ok) {
				const { contributions } = await res?.json();
				const currentDate = new Date().toLocaleDateString(
					'en-CA',
					{ year: 'numeric', month: '2-digit', day: '2-digit' }
				)?.split('/').reverse().join('-');

				const todaysDataIndx = contributions.findIndex(item => item.date === currentDate);
				const currentYearData = contributions?.slice(0, todaysDataIndx + 1);

				const prevYearLastDataIndx = contributions.findIndex(
					item => item.date === (`${(new Date().getFullYear()) - 1}-12-31`)
				);
				const prevYearFirstDataIndx = contributions.findIndex(
					item => item.date === (`${(new Date().getFullYear()) - 1}-01-01`)
				);
				const prevYearData = contributions?.slice(prevYearFirstDataIndx, prevYearLastDataIndx + 1);

				const combineData = [...prevYearData, ...currentYearData];

				console.log({ combineData })

				const lastYearData = convertTo2DArray(
					combineData, 7
				)?.slice(-53);

				console.log({ lastYearData });
				setData(lastYearData);
			} else {
				console.log("Something went wrong");
			}
		}

		getContrubutions()

	}, [])
	return (
		<div className='w-full flex justify-center gap-[3px] overflow-x-auto pb-2'>
			{data?.map((column, columnIndx) => {
				return (
					<div
						key={`column-${columnIndx}`}
						className='flex flex-col gap-[3px]'
					>
						{column?.map(({ date, level, count }, indx) => (
							<div
								key={`column-${columnIndx}-row-${indx}`}
								className={`w-[10px] h-[10px] rounded-sm ${level === 4 ? 'bg-[#39d353]' : (
									level === 3 ? 'bg-[#26a641]' : (level === 2 ? 'bg-[#006d32]' : (level === 1 ? 'bg-[#0e4429]' : 'bg-[#161b22]'))
								)} `}
								title={`${count} contributions on ${date}`}
							>
								{/* <p className='text-xs'>
									{`${columnIndx}, ${indx}`}
								</p> */}
							</div>
						))}
					</div>
				)
			})}
		</div>
	)
}



export default GhGraph