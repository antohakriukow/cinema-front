import * as uiActions from './ui/ui.slice'
import * as userActions from './user/user.actions'

export const allActions = {
	...userActions,
	...uiActions,
}
