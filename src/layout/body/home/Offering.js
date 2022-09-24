import React from 'react'

const Offering = ({ offeringName, fileName }) => {
	return (
		<div className="group item max-w-[256px] max-h-[450px] shadow-2xl rounded-xl">
			<img
				src={require(`../../../assets/home/${fileName}`)}
				alt=""
				className="hidden w-full duration-200 md:block group-hover:scale-110"
			/>
			<img
				src={require(`../../../assets/home/${fileName}`)}
				alt=""
				className="w-full md:hidden"
			/>
			<div className="item-gradient"></div>
			<h5>{offeringName}</h5>
		</div>
	)
}

export default Offering
