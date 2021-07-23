# material-ui-responsive-nav
An easy-to-use component that allows you to add responsive navigation with minimum fuss.

## Install
```bash
npm i material-ui-responsive-nav @material-ui/core
```

**NOTE:** This component requires Material-UI to work.

## Usage
```javascript
import React from "react"
import { MaterialUINav } from "material-ui-responsive-nav"
// you will need to import the icons from an external source to use with external links
import { Facebook, Twitter } from "mdi-material-ui"

const Layout = ({children}) => {

  const links = {
    internal: [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Contact",
        link: "/contact",
      },
    ],
    external: [
      {
        label: "Facebook",
        icon: Facebook,
        link: "https://www.facebook.com",
      },
      {
        label: "Twitter",
        icon: Twitter,
        link: "https://www.twitter.com",
      },
    ],
  }

  return (
    <>
      <MaterialUINav
        global={{
          siteTitle: "My cool site",
          mobileBreakpoint: "xs",
        }}
        navbarConfig={{
          elevate: false,
        }}
        mobileMenuConfig={{
          slideTransition: true,
        }}
        links={links}
      />
      {children}
    </>
  )
}
```
## API

### links *(required)*
|Property|Description|Type|Options|Default|
---| --- | --- | --- | ---
|```internal```|An array of internal links to include in the navigation|```array```|\[ { label: ```string```, link: ```string```, navbarLinkProps: ```object``` (pass props to the Button component), mobileMenuProps: ```object``` (pass props to the ListItem component), mobileMenuTextProps: ```object``` (pass props to the ListItemText component) } \]|N/A
|```external```|An array of external links to include in the navigation|```array```|\[ { label: ```string```, link: ```string```, icon: ```node```, navbarLinkProps: ```object``` (pass props to the IconButton component), mobileMenuProps: ```object``` (pass props to the IconButton component) } \]|N/A

### global
|Property|Description|Type|Options|Default|
---| --- | --- | --- | ---
|```siteTitle```|The title to show on the navbar and the mobile menu |```string```|N/A|"My site"
|```mobileBreakpoint```|The point at which to display the mobile layout|```string```|"xs", "sm", "md", "lg", "xl"|"sm"

### navbarConfig
|Property|Description|Type|Options|Default|
---| --- | --- | --- | ---
|```color```|Background color of the navbar|```string```|"primary", "secondary", "transparent"|"primary"
|```fixed```|Fix the navbar to the top of the screen|```boolean```|N/A|true
|```appBarProps```|Pass props to the AppBar component|```object```|N/A|null
|```transparentAtTop```|Make the background of the navbar transparent if at the top of the page. |```boolean```|N/A|false
|```elevate```|Show a box shadow|```boolean```|N/A|true
|```shrinkOnScrollDown```|Shrink the height of the navbar if not at the top of the page|```boolean```|N/A|true
|```shrinkTransitionDuration```|Adjust the duration in seconds of the shrink (and grow) animation. *shrinkOnScrollDown must be true for this to work.*|```number```|N/A|0.5
|```logo```|Add a component to display a logo |```component```|N/A|null
|```titleTypographyVariant```|Adjust the typography variant for the site title|```string```|"h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "overline", "button", "caption"|"h5" 
|```alignLinksRight```|Change the alignment of internal links|```boolean```|N/A|true
|```additionalLinkSpacing```|Add more space (in pixels) between internal links|```number```|N/A|0
|```disableTitleClick```|Disables onClick functionality on the site title|```boolean```|N/A|false
|```titleOnClick```|Change the onClick function|```function```|N/A|()=>window.open("/")
|```titleProps```|Pass props to the Typography component|```object```|N/A|null
|```titleRightMargin```|Adjust the right margin of the site title. *Only works if alignLinksRight is false.*|```number```|N/A|4
|```linksTextTransform```|Change the case of the links|```string```|"uppercase", "lowercase", "capitalize"|"uppercase"
|```showTooltips```|Show tooltips on external links|```boolean```|N/A|true
|```mobileMenuButtonProps```|Pass props to the IconButton component|```object```|N/A|{}

### mobileMenuConfig
|Property|Description|Type|Options|Default|
---| --- | --- | --- | ---
|```bgcolor```|Background color of the mobile menu|```string```|"primary", "secondary", "error", "warning", "info", "success"|null
|```logo```|Add a component to display a logo |```component```|N/A|null
|```showTitle```|Show the ```siteTitle``` (defined in *global*)|```boolean```|N/A|true
|```titleTypographyVariant```|Adjust the typography variant for the site title. *showTitle must be true for this to work*|```string```|"h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "overline", "button", "caption"|"h4" 
|```titleProps```|Pass props to to the Typography component|```object```|N/A|null
|```linksTextTransform```|Change the case of the links|```string```|"uppercase", "lowercase", "capitalize"|"uppercase"
|```internalLinksProps```|Pass props to the List component|```object```|N/A|{}
|```externalLinksProps```|Pass props to the Box component|```object```|N/A|{}
|```externalLinksAdditionalSpacing```|Add extra space to the bottom of the internal links|```number```|N/A|0
|```slideTransition```|Open/close the mobile menu with a slide transition instead of the default fade transition|```boolean```|N/A|false
|```closeButtonProps```|Pass props to the Fab component|```object```|N/A|{}

## Contribute
This is one of the first components I have created. There is a lot of scope for improvement and I happily invite you to contribute!
