import cn from 'classnames'
import { FC } from 'react'

import { useWidth } from '@/hooks/useWidth'

import Menu from '../Navigation/MenuContainer/Menu'
import GenreMenu from '../Navigation/MenuContainer/genres/GenreMenu'
import { firstMenu, userMenu } from '../Navigation/MenuContainer/menu.data'
import Search from '../Sidebar/Search/Search'

import styles from './HeaderMenu.module.scss'
import Logo from './Logo'
import MenuBtn from './MenuBtn/MenuBtn'
import { useHeaderMenu } from './useHeaderMenu'

const HeaderMenu: FC = () => {
	const { isMenuOpened } = useHeaderMenu()

	return (
		<div
			className={cn(styles.container, {
				[styles.container_opened]: isMenuOpened,
			})}
		>
			<Logo />
			<MenuBtn />
			<div
				className={cn(styles.menus, {
					[styles.menus_visible]: isMenuOpened,
				})}
			>
				<Search />
				<Menu menu={firstMenu} />
				<GenreMenu />
				<Menu menu={userMenu} />
			</div>
		</div>
	)
}
export default HeaderMenu
