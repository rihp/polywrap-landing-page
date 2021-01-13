import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl"; 
import { ReactComponent as Buttons } from "../assets/WindowButtons.svg"
import { blueGrey } from "@material-ui/core/colors";

const exampleCode = `client.query({
  uri: new Uri('ens/api.protocol.eth'),
  query: \`mutation {
    doComplexThing(arg: "value")
  }\`
})
`.trim();

const stylesConst = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    borderRadius: "0px 0px 15px 15px",
    width: "auto",
    ...theme.plain
  },
  window: {
    borderRadius: "15px",
    backgroundColor: '#011627',
    fontFamily: '"Montserrat", "Arial", sanserif',
    fontWeight: 500,
    color: "white",
    boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.15)",
    padding: '15px',
    margin:'60px',
    
  },
  tab: {
    margin: '5px',
    paddingLeft: '0px'
  },
  buttons: {
    marginRight: '10px'
  }
}


const WithLineNumbers = () => (
  <div style={stylesConst.window}>
    <p style={stylesConst.tab}>    
      <Buttons style={stylesConst.buttons}/>
      SampleTitle
    </p>
      <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
        </Highlight>
  </div>
);

export default WithLineNumbers;




