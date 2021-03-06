import { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'popular movies in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3),
		}
	)
	return isLoading ? (
		<div className="mt-11"></div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	)
}

export default PopularMovies
