import * as React from 'react'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
	},
}

function AiFillHtml5(props) {
	return (
		<motion.svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			viewBox="0 0 1024 1024"
			height="6em"
			width="6em"
			className="duration-300 hover:text-blue-500"
			variants={imageAnimate}
			{...props}
		>
			<path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
		</motion.svg>
	)
}

export default AiFillHtml5
