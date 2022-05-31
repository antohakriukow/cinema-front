import GenreList from '@/screens/admin/genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreList />
}

GenreEditPage.isOnlyAdmin = true
export default GenreEditPage
