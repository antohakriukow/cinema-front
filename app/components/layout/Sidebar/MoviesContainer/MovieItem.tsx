import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<a href={getMovieUrl(movie.slug)} className={styles.link}>
					<div className={styles.img}>
						<Image
							style={{
								borderRadius: 8,
								borderWidth: 1,
							}}
							width={65}
							height={97}
							alt={movie.title}
							src={movie.poster}
							draggable={false}
							priority
							unoptimized
						/>
					</div>
				</a>
				<div className={styles.info}>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>
									{getGenresListEach(index, movie.genres.length, genre.name)}
								</a>
							</Link>
						))}
					</div>
					<div className={styles.rating}>
						<MaterialIcon name="MdStarRate" />
						<span>{movie.rating.toFixed(1)}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
