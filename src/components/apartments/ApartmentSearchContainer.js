import React from 'react'

function ApartmentSearchContainer({ children }) {
	return (
		<div className="h-full bg-secondary bg-opacity-80 w-[22.5%] p-4 absolute left-0 z-20 text-white">
			{children}
		</div>
	)
}

export default ApartmentSearchContainer
