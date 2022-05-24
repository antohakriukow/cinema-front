import { FC } from 'react'

const NotAuthFavoriteMovies: FC = () => {
	return (
		<div className="mt-11 bg-grey-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
			For viewing favorites please sign in!
		</div>
	)
}

export default NotAuthFavoriteMovies
