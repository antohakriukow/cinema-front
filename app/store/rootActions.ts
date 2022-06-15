import { closeMenu, toggleMenuOpened } from './ui/ui.slice'
import * as userActions from './user/user.actions'

export const allActions = {
	...userActions,
	toggleMenuOpened,
	closeMenu,
}
