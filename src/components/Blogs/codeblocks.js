import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import * as prism from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    if(inline) return (
      <SyntaxHighlighter
      style={prism.nightOwl}
      customStyle={{padding: '0.25rem', lineHeight: '2', fontSize: '75%', borderRadius: '0.35rem'}}
      PreTag="span" {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    )
    return !inline && match ? (
    <SyntaxHighlighter 
      style={prism.twilight} 
      language={match[1]} 
      PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  a: function (props) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }
}

export default CodeBlock