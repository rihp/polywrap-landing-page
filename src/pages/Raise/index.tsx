import {
  Box,
  styled,
  Typography,
  Link
} from "@material-ui/core";
import { CSSProperties } from "react";
import ReactGA from "react-ga";

const Root = styled(Box)({
  width: '60%',
  maxWidth: '600px',
  margin: 'auto'
});

const SubtextContainer = styled(Typography)({
  margin: 'auto',
  maxWidth: '1400px'
});

const Subtext = styled(Typography)({
  color: '#529dad',
  marginTop: '-10px',
  marginLeft: '2vw',
  fontSize: '14px'
});

const H1 = styled(Typography)({
  marginBottom: 20,
  marginTop: 40,
  color: '#ffffff',
  fontWeight: 700,
  textAlign: 'center',
  paddingBottom: '10px',
  borderBottom: 'solid 2px #529dad75'
});

const H2 = styled(Typography)({
  marginBottom: 20,
  marginTop: 20,
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1.5em',
  textAlign: 'center'
});

const Body = styled(Typography)({
  color: '#529dad',
  fontSize: '16px'
});

const ExtLink = styled(Link)({
  color: 'white',
  textDecoration: 'underline'
});

const InfoText = styled(Typography)({
  color: '#529dad',
  marginTop: '-10px',
  marginLeft: '2vw',
  fontSize: '12px'
});

const BatchesTable: CSSProperties = {
  width: '100%',
  maxWidth: '300px',
  margin: 'auto',
  border: 'solid 2px #529dad',
  textAlign: 'center',
  marginTop: '25px',
  marginBottom: '25px',
  color: '#529dad'
}

const BatchesHeader: CSSProperties = {
  textAlign: 'center',
  borderSpacing: '2px',
  fontWeight: 'bold',
  fontSize: '18px'
}

const CurrentBatch: CSSProperties = {
  backgroundColor: 'lightgreen',
  color: 'black',
  fontWeight: 'bold'
}

const CenterBox = styled(Box)({
  width: '100%',
  textAlign: 'center'
});

const DistributionLogo = styled("img")({
  maxWidth: '350px',
  margin: 'auto'
});

const RequestGif = styled("img")({
  maxWidth: '500px',
  margin: 'auto',
  marginBottom: '20px'
})

export const Raise = () => {

  ReactGA.pageview('raise');

  return (
    <>
    <SubtextContainer>
      <Subtext>
        Web3's Universal Integration Standard
      </Subtext>
    </SubtextContainer>
    <Root>
      <H1 variant="h1">
        Pre-Seed Funders
      </H1>
      <Body>
        4,000 <code>W3API</code> will be minted to <em>Pre-Seed Funders</em>, with a goal of raising $1M by December 31st. Tokens will be priced in three batches (viewable{" "}
        <ExtLink href="https://github.com/Web3-API/dao/blob/master/token-allocations/pre-seed-funders.csv">
          here
        </ExtLink>).
      </Body>
      <table style={BatchesTable}>
        <thead style={BatchesHeader}>
          <tr>
            <th>Batch</th>
            <th>Supply</th>
            <th>Price</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td><del>1,500 <code>W3API</code></del></td>
              <td>$200</td>
            </tr>
            <tr>
              <td><em>B</em></td>
              <td><del>1,500 <code>W3API</code></del></td>
              <td>$250</td>
            </tr>
            <tr style={CurrentBatch}>
              <td><em>C</em></td>
              <td>1,000 <code>W3API</code></td>
              <td>$325</td>
            </tr>
          </tbody>
      </table>
      <InfoText>
        NOTE: If all 4,000 <code>W3API</code> are not sold by December 31st, the remaining <code>W3API</code> <em>Pre-Seed Funder</em> allocation will be distributed pro-rata to existing <em>Pre-Seed Funders</em>.
      </InfoText>
      <H2 variant="h2">
        Distribution of Governance
      </H2>
      <CenterBox>
        <DistributionLogo src={process.env.PUBLIC_URL + "/imgs/distribution.png"} alt="Distribution Image" />
      </CenterBox>
      <H1 variant="h1">
        Getting Started
      </H1>
      <Body>
        Follow these steps to become a <em>Pre-Seed Funder</em>:
        <ol>
            <li>Go to the <ExtLink
                href="https://client.aragon.org/#/w3api/0x9bb4ea752a3096104c7765ad318b0f9cabaaf95f/">DAO&#39;s Token Request App</ExtLink>.</li>
            <li>Click <strong>Connect Wallet</strong> in the top right corner and select your wallet of choice (i.e. Metamask).</li>
            <li>Click <strong>New Request</strong> below that.</li>
            <li>In <strong>Offered Amount</strong> enter the amount you would like to contribute (DAI, USDC, USDT, or TUSD).
            </li>
            <li>In <strong>Requested Amount</strong> enter the <strong>Offered Amount</strong> divided by the current batch price (<em>$325</em>). This is the number of <code>W3API</code> you will receive.
            </li>
            <li>Press <strong>Create Request</strong> to initiate the proposal and deposit your funds.</li>
            <li>Fill out <ExtLink href="https://airtable.com/shrE0bMs1D07FV3oO">this quick form</ExtLink>.</li>
        </ol>
      </Body>
      <CenterBox>
        <RequestGif src={process.env.PUBLIC_URL + "/imgs/request.gif"} alt="Distribution Image" />
      </CenterBox>
      <Subtext>
        <code>W3API</code> holders will receive this information and vote on your request. If approved, your funds will transfer to the DAO and <code>W3API</code> will be minted to your wallet. If rejected, you will be able to withdraw your funds. You may also withdraw your funds at any time before the request is approved.
      </Subtext>
      <H1 variant="h1">
        F.A.Q.
      </H1>
      <H2 variant="h2">
        What can I do with my <code>W3API</code> tokens?
      </H2>
      <Body>
        Once your token request is approved, you instantly have the power to vote on all on-chain decisions, such as spending funds or minting new tokens.
      </Body>
      <H2 variant="h2">
        What about vesting?
      </H2>
      <Body>
        <code>W3API</code> tokens are initially set to be non-transferable. The DAO can decide to change this in the future and mint tokens to contributors via timelock or vesting contracts.
      </Body>
      <H2 variant="h2">
        What’s the “business model”?
      </H2>
      <Body>
        To build an open standard that gets widely adopted, while also developing revenue-generating products and services on top of the standard that contribute to the long term sustainability of the DAO, namely the Web3Hub. This will ultimately bring more developers and enterprises to Web3.
      </Body>
    </Root>
    </>
  );
}
