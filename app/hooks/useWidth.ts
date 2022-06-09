import { useEffect, useState } from 'react'

interface ISize {
	width: number | undefined
}

export function useWidth(): ISize {
	const [windowSize, setWindowSize] = useState<ISize>({
		width: undefined,
	})
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
			})
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowSize
}
