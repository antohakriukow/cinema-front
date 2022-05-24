import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/Skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...props }) => {
	return (
		<Skeleton
			{...props}
			baseColor="#1F2125"
			highlightColor="#292A2E"
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader
