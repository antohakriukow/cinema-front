import { FC } from 'react'

import { useWidth } from '@/hooks/useWidth'

import Search from '../Sidebar/Search/Search'

import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	const { width } = useWidth()
	return (
		<div className={styles.navigation}>
			<Logo />
			{width && width <= 1200 && <Search />}
			<MenuContainer />
		</div>
	)
}

export default Navigation
