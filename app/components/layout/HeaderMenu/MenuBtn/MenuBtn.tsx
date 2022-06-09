import cn from 'classnames'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useHeaderMenu } from '../useHeaderMenu'

import styles from './MenuBtn.module.scss'

const BurgerMenuBtn: FC = () => {
	const { toggleMenuOpened, isMenuOpened } = useHeaderMenu()
	const icon = isMenuOpened ? 'MdOutlineClose' : 'MdOutlineMenu'
	return (
		<div
			className={cn(styles.btn, {
				[styles.btn_close]: isMenuOpened,
			})}
			onClick={() => toggleMenuOpened()}
		>
			<MaterialIcon name={icon} />
		</div>
	)
}

export default BurgerMenuBtn

// MdOutlineClose
