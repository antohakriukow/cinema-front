import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	const { closeMenu } = useActions()

	return (
		<li
			className={cn(styles.menu__item, {
				[styles.menu__item_active]: asPath === item.link,
			})}
			onClick={() => closeMenu()}
		>
			<Link href={item.link}>
				<a className={styles.menu__link}>
					<MaterialIcon name={item.icon} />
					<span className={styles.menu__title}>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
