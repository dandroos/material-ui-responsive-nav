import { SET_CONFIG, IS_MOBILE, SHOW_MOBILE_MENU, AT_TOP } from "./types"

export const setConfig = (payload) => ({
	type: SET_CONFIG,
	payload,
})

export const setAtTop = (payload) => ({
	type: AT_TOP,
	payload,
})

export const setIsMobile = (payload) => ({
	type: IS_MOBILE,
	payload,
})

export const setShowMobileMenu = (payload) => ({
	type: SHOW_MOBILE_MENU,
	payload,
})
