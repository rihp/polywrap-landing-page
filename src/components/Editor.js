import React, { Fragment, Component} from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const exampleCode = `
import gql from "graphql-tag";

import { Uri, Web3APIClient } from "@web3api/client-js";
import { EthereumPlugin } from "@web3api/ethereum-plugin-js"

const client = new Web3APIClient({
  redirects: [
    {
      from: new Uri("w3://ens/ethereum.web3api.eth"),
      to: new EthereumPlugin(window.ethereum) // JS plugin OR another URI
    }
  ]
});

client.query({
  uri: "ens://api.uniswap.eth",
  query: gql\`
    mutation {
      setData(
        address: $address
        value: $value
      )
    }
  \`
})
`

const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    border: "1px solid #19435F",
    background: "#19435F",
    borderRadius: "15px",
    width: "800px",
    margin: "40px",
    ...theme.plain
  }
}

class EditorExample extends Component {
  state = { code: exampleCode }

  onValueChange = code => {
    this.setState({ code })
  }

  highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={this.onValueChange}
        highlight={this.highlight}
        padding={10}
        style={styles.root}
      />
    )
  }
}
export default EditorExample
