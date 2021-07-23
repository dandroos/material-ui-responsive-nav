import React from "react"
import { storiesOf } from "@storybook/react"

import { MaterialUINav } from "../components/MaterialUINav"

const stories = storiesOf("App Test", module)

stories.add("App", () => {
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
  }

  return (
    <>
      <MaterialUINav links={links} />
    </>
  )
})
