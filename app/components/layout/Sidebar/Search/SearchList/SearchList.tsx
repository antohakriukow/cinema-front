import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<a>
							<Image
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								src={movie.poster}
								alt={movie.title}
								unoptimized
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className={styles.notfound}>Movies not found</div>
			)}
		</div>
	)
}

export default SearchList
