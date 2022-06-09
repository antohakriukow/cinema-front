import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useWidth } from '@/hooks/useWidth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()
	const { width } = useWidth()

	return (
		<>
			{user ? (
				<>
					{width && width <= 1200 && (
						<MenuItem
							item={{
								icon: 'MdOutlineFavorite',
								link: '/favorites',
								title: 'Favorites',
							}}
						/>
					)}
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
