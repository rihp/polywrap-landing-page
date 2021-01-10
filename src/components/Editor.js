import React, { Fragment, Component} from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { ReactComponent as Buttons } from "../assets/WindowButtons.svg"

const exampleCode = `const client = new Web3APIClient({
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
    borderRadius: "0px 0px 15px 15px",
    width: "auto",
    ...theme.plain
  },
  window: {
    backgroundColor: "#19435F",
    borderRadius: "15px",
    boxSizing: 'border-box',
    fontFamily: '"Montserrat", "Arial", sanserif',
    fontWeight: "500",
    color: "white",
    boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.15)",
  },
  tab: {
    margin: '12px',
    paddingLeft: '2px'
  },
  buttons: {
    marginRight: '10px'
  }
}




class EditorExample extends Component {
  state = { 
    code: exampleCode,
    title: 'TestTitle.jsx'
    }

  onValueChange = code => {
    this.setState({ code })
  }

  highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="tsx">
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
      <div className='CodeSnippets'
        style={styles.window}>
        <p style={styles.tab}>
          <Buttons style={styles.buttons}/>
          {this.state.title}
        </p>
        <Editor
          value={this.state.code}
          onValueChange={this.onValueChange}
          highlight={this.highlight}
          padding={20}
          style={styles.root}
        />
      </div>
    )
  }
}
export default EditorExample
