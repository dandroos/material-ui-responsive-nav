import React from "react"
import { Provider } from "react-redux"
import store from "../../state/store"
import { Main } from "../Main"

export const MaterialUINav = ({
	global,
	navbarConfig,
	mobileMenuConfig,
	links,
}) => {
	return (
		<Provider store={store}>
			<Main
				global={global}
				navbarConfig={navbarConfig}
				mobileMenuConfig={mobileMenuConfig}
				links={links}
			/>
		</Provider>
	)
}
