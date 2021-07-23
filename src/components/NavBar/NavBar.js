import React from "react"
import { connect } from "react-redux"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Icon,
  Tooltip,
  useTheme,
} from "@material-ui/core"
import { setShowMobileMenu } from "../../state/actions"

const UnconnectedNavBar = ({ dispatch, atTop, isMobile, config }) => {
  const theme = useTheme()

  const { links, global, navbarConfig } = config

  const { siteTitle } = global

  const {
    logo,
    transparentAtTop,
    shrinkOnScrollDown,
    shrinkTransitionDuration,
    color,
    elevate,
    titleTypographyVariant,
    alignLinksRight,
    additionalLinkSpacing,
    linksTextTransform,
    titleRightMargin,
    showTooltips,
    fixed,
    disableTitleClick,
    titleOnClick,
    titleProps,
    mobileMenuButtonProps,
    appBarProps,
  } = navbarConfig

  return (
    <>
      <AppBar
        position={fixed ? undefined : "static"}
        color={
          transparentAtTop
            ? atTop
              ? "transparent"
              : color
              ? color
              : "primary"
            : color
            ? color
            : "primary"
        }
        style={
          !elevate
            ? { boxShadow: "none" }
            : transparentAtTop
            ? atTop
              ? { boxShadow: "none" }
              : undefined
            : undefined
        }
        {...appBarProps}
      >
        <Toolbar
          variant={
            shrinkOnScrollDown ? (atTop ? "regular" : "dense") : undefined
          }
          style={
            shrinkOnScrollDown
              ? { transition: `all ${shrinkTransitionDuration}s` }
              : undefined
          }
        >
          {logo && logo}
          <Typography
            variant={titleTypographyVariant}
            style={disableTitleClick ? undefined : { cursor: "pointer" }}
            onClick={disableTitleClick ? undefined : titleOnClick}
            {...titleProps}
          >
            {siteTitle}
          </Typography>

          <Box
            flexGrow={alignLinksRight ? 1 : undefined}
            mr={titleRightMargin ? titleRightMargin : undefined}
          />
          {isMobile ? (
            <>
              {!alignLinksRight && <Box flexGrow={1} />}
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => {
                  dispatch(setShowMobileMenu(true))
                }}
                {...mobileMenuButtonProps}
              >
                <Icon>menu</Icon>
              </IconButton>
            </>
          ) : (
            <>
              {links.internal.map((i, ind) => (
                <Button
                  color="inherit"
                  href={i.link ? i.link : undefined}
                  key={ind}
                  style={{
                    marginRight: additionalLinkSpacing
                      ? links.internal.length - 1 === ind
                        ? 0
                        : additionalLinkSpacing
                      : 0,
                    textTransform: linksTextTransform
                      ? linksTextTransform
                      : theme.typography.button.textTransform,
                    minWidth: "auto",
                  }}
                  {...i.navbarLinkProps}
                >
                  {i.label}
                </Button>
              ))}
              {!alignLinksRight && <Box flexGrow={1} />}
              {links.external &&
                links.external.map((i, ind) => {
                  return (
                    <Tooltip title={showTooltips ? i.label : ""} key={ind}>
                      <IconButton
                        color="inherit"
                        edge={
                          config.links.external.length - 1 === ind
                            ? "end"
                            : false
                        }
                        onClick={() => window.open(i.link, "_blank")}
                        {...i.navbarLinkProps}
                      >
                        <i.icon />
                      </IconButton>
                    </Tooltip>
                  )
                })}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateToProps = (state) => ({
  config: state.config,
  atTop: state.atTop,
  isMobile: state.isMobile,
})

export const NavBar = connect(mapStateToProps)(UnconnectedNavBar)
