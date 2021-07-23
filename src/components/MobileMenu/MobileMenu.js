import React from "react"
import { connect } from "react-redux"
import { setShowMobileMenu } from "../../state/actions"
import {
  Portal,
  Dialog,
  Box,
  Tooltip,
  IconButton,
  Icon,
  Typography,
  List,
  ListItem,
  ListItemText,
  Fab,
  Slide,
  Fade,
  useTheme,
} from "@material-ui/core"

const UnconnectedMobileMenu = ({ dispatch, isOpen, links, config }) => {
  const { global, mobileMenuConfig } = config

  const { siteTitle } = global

  const {
    logo,
    showTitle,
    bgcolor,
    linksTextTransform,
    titleTypographyVariant,
    externalLinksAdditionalSpacing,
    slideTransition,
    titleProps,
    closeButtonProps,
    internalLinksProps,
    externalLinksProps,
  } = mobileMenuConfig

  const handleClose = () => {
    dispatch(setShowMobileMenu(false))
  }

  const theme = useTheme()

  return (
    <Portal>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullScreen
        TransitionComponent={slideTransition ? Slide : Fade}
      >
        <Box
          height="100vh"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor={bgcolor ? `${bgcolor}.main` : undefined}
          color={bgcolor ? theme.palette[bgcolor].contrastText : undefined}
        >
          {showTitle && (
            <>
              {logo && logo}
              <Typography variant={titleTypographyVariant} {...titleProps}>
                {siteTitle}
              </Typography>
            </>
          )}
          <List style={{ width: "100%" }} {...internalLinksProps}>
            {links.internal.map((i, ind) => (
              <ListItem
                button
                key={ind}
                onClick={
                  i.link
                    ? () => {
                        window.open(i.link)
                        handleClose()
                      }
                    : handleClose
                }
                {...i.mobileMenuProps}
              >
                <ListItemText
                  primaryTypographyProps={{
                    align: "center",
                    style: {
                      textTransform: linksTextTransform
                        ? linksTextTransform
                        : theme.typography.button.textTransform,
                    },
                    display: "block",
                  }}
                  primary={i.label}
                  {...i.mobileMenuTextProps}
                />
              </ListItem>
            ))}
          </List>
          <Box
            mt={
              externalLinksAdditionalSpacing
                ? externalLinksAdditionalSpacing
                : 0
            }
            {...externalLinksProps}
          >
            {links.external &&
              links.external.map((i, ind) => (
                <Tooltip title={i.label} key={ind}>
                  <IconButton
                    color="inherit"
                    onClick={() => window.open(i.link, "_blank")}
                    {...i.mobileMenuProps}
                  >
                    <i.icon />
                  </IconButton>
                </Tooltip>
              ))}
          </Box>
        </Box>
        <Fab
          onClick={handleClose}
          color="inherit"
          style={{ position: "fixed", top: 15, right: 15 }}
          {...closeButtonProps}
        >
          <Icon>close</Icon>
        </Fab>
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = (state) => ({
  isOpen: state.showMobileMenu,
  links: state.config.links,
  config: state.config,
})

export const MobileMenu = connect(mapStateToProps)(UnconnectedMobileMenu)
