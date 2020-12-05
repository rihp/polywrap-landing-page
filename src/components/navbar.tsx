import { AppBar, Grid, Box, Link } from '@material-ui/core'
import React from 'react'
import { styled } from '@material-ui/core'

const Logo = styled('img')({
  width: 170,
  height: 'auto'
})

const LinkButton = styled(Link)({
  height: '100%'
})

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid container justify="space-between" alignItems='center'>
        <Grid item>
          <Box>
            <Logo src={'./logo-full.png'} alt='Web3 API Logo'/>
          </Box>
        </Grid>
        <Grid item>
          <LinkButton href="https://airtable.com/shri2hEgu1BlMLXZ9">Blog</LinkButton>
          <LinkButton href="https://github.com/web3-api/prototype">Code</LinkButton>
          <LinkButton href="https://web3api.substack.com/">Contact</LinkButton>
        </Grid>
      </Grid>
    </AppBar>
  )
}