import ActorList from '@/screens/admin/actor/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorList />
}

ActorEditPage.isOnlyAdmin = true
export default ActorEditPage
