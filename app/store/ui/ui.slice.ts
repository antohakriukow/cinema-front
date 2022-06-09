import { createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './ui.interface'

const initialState: IInitialState = {
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
export const { reducer } = uiSlice
