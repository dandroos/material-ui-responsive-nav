import { SET_CONFIG, AT_TOP, IS_MOBILE, SHOW_MOBILE_MENU } from "./types"

const initialState = {
	config: {
		global: {
			siteTitle: "My site",
			mobileBreakpoint: "sm",
		},
		navbarConfig: {
			fixed: true,
			transparentAtTop: false,
			elevate: true,
			shrinkOnScrollDown: true,
			shrinkTransitionDuration: 0.5,
			titleTypographyVariant: "h5",
			disableTitleClick: false,
			alignLinksRight: true,
			titleRightMargin: 4,
			showTooltips: true,
			titleOnClick: () => window.open("/"),
		},
		mobileMenuConfig: {
			showTitle: true,
			bgcolor: null,
			titleTypographyVariant: "h4",
			externalLinksAdditionalSpacing: undefined,
			slideTransition: false,
		},
		links: {
			internal: [],
			external: [],
		},
	},
	atTop: true,
	isMobile: true,
	showMobileMenu: false,
}

const reducer = (state = initialState, { type, payload }) => {
	const newState = Object.assign({}, state)

	switch (type) {
		case SET_CONFIG:
			newState.config = payload
			break
		case AT_TOP:
			newState.atTop = payload
			break
		case IS_MOBILE:
			newState.isMobile = payload
			break
		case SHOW_MOBILE_MENU:
			newState.showMobileMenu = payload
			break
		default:
			break
	}
	return newState
}

export default reducer
