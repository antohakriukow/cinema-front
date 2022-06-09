import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as uiReducer } from './ui/ui.slice'
import { reducer as userReducer } from './user/user.slice'

export const reducers = {
	user: userReducer,
	ui: uiReducer,
	toastr: toastrReducer,
}
