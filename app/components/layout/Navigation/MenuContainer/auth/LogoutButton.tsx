import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

import styles from '../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={styles.menu__item}>
			<a className={styles.menu__link} onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span className={styles.menu__title}>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
