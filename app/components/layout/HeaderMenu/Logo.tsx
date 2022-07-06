import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mt-7 block">
				<Image
					src={logoImage}
					width={137}
					height={32}
					alt="online-cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
