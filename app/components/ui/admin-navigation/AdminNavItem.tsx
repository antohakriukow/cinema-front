import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()

	return (
		<li className={styles.nav__item}>
			<Link href={link}>
				<a
					className={cn(styles.nav__link, {
						[styles.nav__link_active]: asPath === link,
					})}
				>
					{title}
				</a>
			</Link>
		</li>
	)
}
export default AdminNavItem
