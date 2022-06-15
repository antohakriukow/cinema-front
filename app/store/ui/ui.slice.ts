import { createSlice } from '@reduxjs/toolkit'

import { IUiState } from './ui.interface'

const initialState: IUiState = {
	isMenuOpened: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMenuOpened: (state) => {
			state.isMenuOpened = !state.isMenuOpened
		},
		closeMenu: (state) => {
			state.isMenuOpened = false
		},
	},
})

export const { toggleMenuOpened, closeMenu } = uiSlice.actions
export const uiReducer = uiSlice.reducer
