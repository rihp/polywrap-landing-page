import React from 'react';
import { useEffect, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Box, makeStyles, styled } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import theme from "prism-react-renderer/themes/nightOwl";

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
      cursor: 'pointer',
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
    overflowY: 'auto',
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


export const Tabs = ({queriesData, activeQuery, setActiveQuery}: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.tabs} display='flex'>
      { queriesData &&
        queriesData.map((query: { featured: boolean, filename: string }, index: number) => {
          return query.featured &&
            <Box
              key={index}
              data-id={index}
              className={`${classes.tab} ${activeQuery === index && 'is-active'}`}
              onClick={() => setActiveQuery(index)}
          >
            {query.filename}
          </Box>
        }
      )}
    </Box>
  );
};


export const IDE = ({queriesData}: any) => {
  const classes = useStyles();
  const firstFeatured = queriesData.findIndex((query: { featured: boolean; }) => query.featured);
  const [activeQuery, setActiveQuery] = useState(firstFeatured);

  return (
    <Box className={classes.root}>
      <Tabs queriesData={queriesData} activeQuery={activeQuery} setActiveQuery={setActiveQuery} />

      <Box className={classes.main}>
        <Highlight {...defaultProps} code={queriesData[activeQuery].query} theme={theme} language={queriesData[activeQuery].language}>
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
