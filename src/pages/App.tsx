import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import { LINK_PRIVACY_POLICY, LINK_TERMS_OF_USE } from '../constants'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 160px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            <Marginer />
            <React.Fragment>
            <div style={{maxWidth:'720px',marginTop:'100vh',marginBottom:'100px'}}>
            <h1 style={{ fontSize: "2em" }}>Terms of Use</h1>
            <p>
                By accessing any CZODIAC website, including but not limited to
                CZODIAC's decentralized applications and services, and engaging
                in any activities related to the CZODIAC ecosystem, including
                buying, selling, trading, holding CZODIAC tokens, or
                participating in the CZODIAC community, users acknowledge that
                they have read, understood, and agreed to be bound by the terms
                and conditions set forth in CZODIAC's Terms of Use. The Terms of
                Use, available at{' '}
                <a style={{ color: 'cyan' }} href={LINK_TERMS_OF_USE}>
                  {LINK_TERMS_OF_USE}
                </a>
                , constitute a legally binding agreement between users and
                CZODIAC, and users should review them carefully before engaging
                in any activities related to the CZODIAC ecosystem. If users do
                not agree to the terms and conditions set forth in the Terms of
                Use, they should not access or use CZODIAC's websites, dapps,
                tokens, or other offerings. By using any CZODIAC website, users
                represent and warrant that they have the legal capacity to enter
                into a binding agreement with CZODIAC and that they comply with
                all applicable laws and regulations.
                <br />
                <br />
                <a style={{ color: 'cyan' }} href={LINK_TERMS_OF_USE}>
                  LINK TO TERMS OF USE
                </a>
              </p>
              <br />
              <h1 style={{ fontSize: "2em" }}>Privacy Policy</h1>
              <p>
                At CZODIAC, we are committed to protecting the privacy and
                personal information of our users. We encourage you to read our
                Privacy Policy, which can be found at{' '}
                <a style={{ color: 'cyan' }} href={LINK_PRIVACY_POLICY}>
                  {LINK_PRIVACY_POLICY}
                </a>
                . This policy outlines the types of personal information that
                CZODIAC may collect, the purposes for which this information is
                used, and the steps taken to ensure the security and
                confidentiality of your personal data. By using CZODIAC's
                websites or services, you acknowledge that you have read and
                understood our Privacy Policy and consent to the collection,
                use, and disclosure of your personal information as described
                therein. If you have any questions or concerns about our privacy
                practices, please contact us at team@czodiac.com.
                <br />
                <br />
                <a style={{ color: 'cyan' }} href={LINK_PRIVACY_POLICY}>
                  LINK TO PRIVACY POLICY
                </a>
              </p>
              </div>
              </React.Fragment>
          </BodyWrapper>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
