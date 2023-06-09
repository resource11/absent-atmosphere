import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"

import { Button, Card, CodeBlock, CTALink, DisplayBox, Icon, Link } from "."

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, use the custom code block
    if (props) {
      return <CodeBlock {...props} style={{ padding: "1rem" }} />
    } else {
      // don't customize the pre at all
      return undefined
    }
  },
  Button,
  Card,
  CTALink,
  DisplayBox,
  Icon,
  Link,
}

// inspired by Twitch Livestream with Jason Lengstorf and Chris Biscardi's blog post:
// https://www.christopherbiscardi.com/post/using-mdx-scope-in-react-live-scope/

// pass the custom components at the root level
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

export default wrapRootElement

wrapRootElement.propTypes = {
  element: PropTypes.object,
}
