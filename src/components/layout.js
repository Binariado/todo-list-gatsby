import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography";


export default function Layout({ children }) {
  return (
    <main
      css={css`
        height: 100%;
        padding: ${rhythm(0.5)};
        display: flex;
    `}>
      {children}
    </main>
  )
}