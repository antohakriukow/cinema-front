import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* TODO: Add genres menu */}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
