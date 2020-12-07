import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, styled, useTheme } from '@material-ui/core'
import React from 'react'

const FooterContainer = styled(Grid)({
  height: 50,
  paddingBottom: 15
})

const LogoContainer = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Logo = styled(FontAwesomeIcon)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: 30,
  paddingRight: '10vw',
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.secondary.main
  }
}));

export const Footer = () => {
  const theme = useTheme()

  return (
    <FooterContainer container justify='flex-end'>
      <Grid item>
        <LogoContainer href="https://t.me/Web3API" target="_blank">
          <Logo
            icon={faTelegram}
            color={theme.palette.text.secondary}
            style={{ paddingRight: 10 }}
          />
        </LogoContainer>
      </Grid>
      <Grid item>
        <LogoContainer href="https://twitter.com/web3api" target="_blank">
          <Logo
            icon={faTwitter}
            color={theme.palette.text.secondary}
            style={{ paddingRight: 35 }}
          />
        </LogoContainer>
      </Grid>
    </FooterContainer>
  )
}