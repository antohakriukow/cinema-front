import { FC, useState } from 'react'

import HeaderMenu from './HeaderMenu/HeaderMenu'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = ({ children }) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false)

	return (
		<>
			<HeaderMenu />
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>{children}</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout
