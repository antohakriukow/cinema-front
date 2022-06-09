import { IMovie } from '@/shared/types/movie.types'

export interface ICatalog {
	title: string
	description?: string
	movies: IMovie[]
}

export interface ICatalogItem {
	posterPath: string
	name: string
	link: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface ICatalogItemProps {
	item: ICatalogItem
	variant: 'horizontal' | 'vertical'
}
