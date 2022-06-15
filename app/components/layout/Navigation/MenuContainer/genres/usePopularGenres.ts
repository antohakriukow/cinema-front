import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { getGenresUrl } from '@/config/api.config'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const QueryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenresUrl(`/${genre.slug}`),
							title: genre.name,
						})
					)
					.splice(0, 4),
		}
	)

	return QueryData
}
