import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { useTheme, useMediaQuery } from "@material-ui/core"
import { NavBar } from "../NavBar"
import { MobileMenu } from "../MobileMenu"
import { setAtTop, setConfig, setIsMobile } from "../../state/actions"

const UnconnectedComponent = ({
	dispatch,
	global,
	navbarConfig,
	mobileMenuConfig,
	links,
	mobileBreakpoint,
	config,
}) => {
	useEffect(() => {
		dispatch(
			setConfig({
				global: { ...config.global, ...global },
				navbarConfig: { ...config.navbarConfig, ...navbarConfig },
				mobileMenuConfig: { ...config.mobileMenuConfig, ...mobileMenuConfig },
				links,
			})
		)
	}, [])
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint))

	useEffect(() => {
		dispatch(setIsMobile(isMobile))
	}, [isMobile])

	useEffect(() => {
		document.addEventListener("scroll", () => {
			dispatch(setAtTop(window.scrollY === 0))
		})
	}, [])

	return (
		<>
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Helmet>
			<NavBar />
			<MobileMenu />
		</>
	)
}

const mapStateToProps = (state) => ({
	mobileBreakpoint: state.config.global.mobileBreakpoint,
	config: state.config,
})

export const Main = connect(mapStateToProps)(UnconnectedComponent)
