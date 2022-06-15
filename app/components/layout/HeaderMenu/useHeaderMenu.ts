import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '@/hooks/useActions'
import { useWidth } from '@/hooks/useWidth'

export const useHeaderMenu = () => {
	const { toggleMenuOpened, closeMenu } = useActions()
	const isMenuOpened = useSelector((state: any) => state.ui.isMenuOpened)

	const { width } = useWidth()

	useEffect(() => {
		if (width && width >= 800) closeMenu()
	}, [width, closeMenu])

	return useMemo(
		() => ({
			toggleMenuOpened,
			isMenuOpened,
		}),
		[toggleMenuOpened, isMenuOpened]
	)
}
