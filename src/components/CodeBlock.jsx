/* from https://codetrain.io/adding-prism-syntax-highlighting-to-gatsby-mdx*/
import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import Prism from "prism-react-renderer/prism";

export default (props) => {
  const className = props.children.props.className || 'language-text'    
  const language = className.replace("language-", "")

  const matches = className.match(/language-(?<lang>.*)/)

  const CopyButton = props => {
    const [text, setText] = useState("Copy")

    return (
      <button className="code-copy-button" onClick={() => {
        navigator.clipboard.writeText(props.content)
        setText("Copied!")
        setTimeout(() => { setText("Copy") }, 2500)
      }}
      >
        {text}
      </button>
    )
  }

  return (
    <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : ''
    }
      theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          <div className="code-header">
            <span className="language-name">{language}</span>
            <CopyButton content={props.children.props.children} />
          </div>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} className="line">
              <span className="line-no">{i + 1}</span>
              <span className="line-content" >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}