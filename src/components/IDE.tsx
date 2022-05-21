import Highlight, { defaultProps } from "prism-react-renderer";
import { Box, makeStyles, styled } from '@material-ui/core';
import { polywrapPalette } from '../theme';

// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import {  webContent, wrapper, ContentfulFetcher } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    borderRadius: 8,
    position: 'relative',
    width: '100%',
  },
  tabs: {
    background: polywrapPalette.secondary[900],
    borderRadius: '8px 8px 0 0',
    overflowX: 'hidden',
  },
  tab: {
    borderRight: `1px solid rgba(255,255,255,0.05)`,
    color: 'rgba(255,255,255,0.5)',
    cursor: 'default',
    padding: `12px 16px`,
    transition: `background 0.25s ease-in-out`,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.8)',
    },
    '&.is-active': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
      color: 'rgba(255,255,255,0.8)',
    },
  },
  main: {
    background: polywrapPalette.secondary[800],
    borderRadius: '0 0 8px 8px',
    maxHeight: '400px',
    overflowY: 'scroll',
  },
  pre: {
    textAlign: 'left',
    margin: 0,
    padding: 24,
  },
  line: {
    color: 'white',
    display: 'table-row',
    fontFamily: `'Space Mono', 'PT Mono', mono`,
    fontSize: 18,
    fontWeight: 500,
  },
  lineNumber: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    display: 'table-cell',
    paddingRight: 16,
    userSelect: 'none',
    opacity: '0.5',
  },
  lineContent: {
    display: 'table-cell',
  },
}));

const Line = styled('div')({
  display: 'table-row',
  fontFamily: `Space Mono, Ubuntu Mono, Courier New`,
});

const LineNo = styled('span')({
  display: 'table-cell',
  textAlign: 'right',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: '0.5',
});

const LineContent = styled('span')({
  display: 'table-cell',
});


// CONTENTFUL CMS INITIAL SET UP BELOW
const cmsQuery = `query { 
  featuredWrapper(id:"1Lo0Gmtk7BI5v0bNmzPRhb") { 
    wrapperName
    docsLink
    featured
    thirdParty
    description
 		queriesCollection {
      items {
        filename
        featured
        query
        comment
        source
      }
    }  
	}
}`;
// CONTENTFUL CMS INITIAL SET UP ABOVE


//TODO: Deprecate this const
const queries = 
[
  `Web3Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
  `Web4Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
  `Web5Api.query({
    uri: ensUri,
    query: \`query {
      bestTradeExactIn(
        pairs: $pairs
        amountIn: $amountIn
        tokenOut: $tokenOut
        options: $options
        )
      }\`,
    })
  })`,
]

export const Tabs = () => {
  const classes = useStyles();


  // CONTENTFUL CMS INTEGRATION BELOW
  const [someContent, setSomeContent] = useState<wrapper> (
    {
      "wrapperName": "MockedData",
      "featured": false,
      "thirdParty": false,
      "description": "Read the Docs",
      "queriesCollection": {
        "items": [
          {
            "filename": "calcTradeOutput",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"query\",\n  method: \"bestTradeExactIn\",\n  input: {\n    pools,\n    amountIn,\n    tokenOut,\n    ...\n  }\n});",
            "comment": "// Compute Trade Outputs w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/query/schema.graphql#L470-L479"
          },
          {
            "filename": "executeSwap",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"mutation\",\n  method: \"swap\",\n  input: {\n    inToken,\n    outToken,\n    amount,\n    ...\n  }\n});",
            "comment": "// Execute Token Swaps w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61"
          }
        ]
      },
      "docsLink":""

  });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /////////// CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: wrapper = response.data.featuredWrapper;
        console.log("On the arrow func", content)

        setSomeContent(content);
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });

  }, []);
  // const data = someContent
  // console.log("someContent: ", data)
  // CONTENTFUL CMS INTEGREATION ABOVE

  return (
    <Box className={classes.tabs} display='flex'>
      <Box data-id={0} className={`${classes.tab} is-active`}>{someContent.wrapperName}.ts</Box>
      {/* <Box data-id={1} className={classes.tab}>Tab.js</Box>
      <Box data-id={2} className={classes.tab}>Tab.py</Box> */}
    </Box>
  );
};

export const IDE = () => {
  const classes = useStyles();

    // CONTENTFUL CMS INTEGRATION BELOW
    const [someContent, setSomeContent] = useState<wrapper> ({
      "wrapperName": "Uniswap V3",
      "docsLink": "https://docs.polywrap.io/uniswapv3/intro",
      "featured": true,
      "thirdParty": false,
      "description": "The Uniswap Polywrapper is written in AssemblyScript, and like the official Uniswap SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap Polywrapper business logic will be deployed on a decentralized endpoint, like IPFS.",
      "queriesCollection": {
        "items": [
          {
            "filename": "calcTradeOutput",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"query\",\n  method: \"bestTradeExactIn\",\n  input: {\n    pools,\n    amountIn,\n    tokenOut,\n    ...\n  }\n});",
            "comment": "// Compute Trade Outputs w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/query/schema.graphql#L470-L479"
          },
          {
            "filename": "executeSwap",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"mutation\",\n  method: \"swap\",\n  input: {\n    inToken,\n    outToken,\n    amount,\n    ...\n  }\n});",
            "comment": "// Execute Token Swaps w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61"
          }
        ]
      }
    });
    const [hasFailed, setHasFailed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    useEffect(() => {
      /////////// CMS content fetching: Callback version
      setIsLoading(true);
  
      ContentfulFetcher(cmsQuery).then(
        (response) => {
          //On success        
          const content: wrapper = response.data.featuredWrapper;
          //console.log("On the arrow func", content)
  
          setSomeContent(content);
        }, 
        (error) => {
          //On fail
          setHasFailed(true);
        }
      ).finally(() => {
        setIsLoading(false);
      });
  
    }, []);
     const data = someContent
     console.log("someContent: ", data.queriesCollection)
     
    // CONTENTFUL CMS INTEGREATION ABOVE

  return (
    <Box className={classes.root}>
      <Tabs />
      <Box className={classes.main}>
        {/* Use the line below to fetch the query
          TODO: Adapt this to work with any language, in a way that 
          is also able to map one query to the desired language */}
        <Highlight {...defaultProps} code={someContent.queriesCollection.items[1].query} theme={undefined} language="javascript">
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className={classes.pre}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo className={classes.lineNumber}>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
    </Box>
  );
};
