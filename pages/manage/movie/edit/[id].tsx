import MovieList from '@/screens/admin/movie/MovieEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieEditPage: NextPageAuth = () => {
	return <MovieList />
}

MovieEditPage.isOnlyAdmin = true
export default MovieEditPage
