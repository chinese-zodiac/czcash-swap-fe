import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { routerv2 } from '../pcs_address.json'

import { injected, walletconnect, walletlink } from '../connectors'
import { WrappedTokenInfo } from '../state/lists/hooks'
//fortmatic, portis, walletconnect, walletlink, lattice
export const ROUTER_ADDRESS: { [key: string]: string } = {
  [ChainId.MAINNET]: routerv2,
  [ChainId.TESTNET]: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"
}

export const LINK_TERMS_OF_USE = "https://czodiac.gitbook.io/czodiac-litepaper/terms-of-use";

export const LINK_PRIVACY_POLICY = "https://czodiac.gitbook.io/czodiac-litepaper/privacy-policy";

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}
export const CZR = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b",
    name: "CZRed",
    decimals:18,
    symbol:"CZR",
    logoURI:"https://cz.cash/images/tokens/CZR.svg"
  },[]
)

export const CZUSD = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70",
    name: "CZUSD",
    decimals:18,
    symbol:"CZUSD",
    logoURI:"https://cz.cash/images/tokens/czusd.svg"
  },[]
)

export const CZF = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x7c1608C004F20c3520f70b924E2BfeF092dA0043",
    name: "CZodiac Farm",
    decimals:18,
    symbol:"CZF",
    logoURI:"https://cz.cash/images/tokens/CZF.png"
  },[]
)

export const DAMP = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0xA59d649B5e3Bbb1390141C3c25c255FAA909A81F",
    name: "DampIt",
    decimals:18,
    symbol:"DAMP",
    logoURI:"https://cz.cash/images/tokens/DAMP.png"
  },[]
)

export const KYIV = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x390D9613bA4E1352cBCc289a6629139bdE0cD321",
    name: "UkrainianTribe.com",
    decimals:18,
    symbol:"KYIV",
    logoURI:"https://cz.cash/images/tokens/KYIV.png"
  },[]
)

export const LSDT = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0xAa83Bb1Be2a74AaA8795a8887054919A0Ea96BFA",
    name: "Lucky Silver Dollar Token",
    decimals:18,
    symbol:"LSDT",
    logoURI:"https://cz.cash/images/tokens/LSDT.png"
  },[]
)

export const ARTH = new Token(
  ChainId.MAINNET,
  '0xB69A424Df8C737a122D0e60695382B3Eec07fF4B',
  18,
  'ARTH',
  'Arth Valuecoin'
)

export const LRT = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0xE95412D2d374B957ca7f8d96ABe6b6c1148fA438",
    name: "LuckyRabbitToken",
    decimals:18,
    symbol:"LRT",
    logoURI:"https://cz.cash/images/tokens/LRT.png"
  },[]
)

export const GEM = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x701F1ed50Aa5e784B8Fb89d1Ba05cCCd627839a7",
    name: "GreenMiner",
    decimals:18,
    symbol:"GEM",
    logoURI:"https://cz.cash/images/tokens/GEM.png"
  },[]
)

export const DGOD = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x99F4cc2BAE97F82A823CA80DcAe52EF972B7F270",
    name: "DogeGod",
    decimals:18,
    symbol:"DGOD",
    logoURI:"https://cz.cash/images/tokens/DGOD.png"
  },[]
)

export const FLOX = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x7a2E776650F02113DEfCD2EFF1ea0B3ba02bd45a",
    name: "FlokiMultiverse",
    decimals:18,
    symbol:"FLOX",
    logoURI:"https://cz.cash/images/tokens/FLOX.png"
  },[]
)

export const BRAG = new WrappedTokenInfo(
  {
    chainId:56,
    address:"0x48c2bc3d0c63174B811aD4fa09b45cC039578aDb",
    name: "Raging Bull Network",
    decimals:18,
    symbol:"BRAG",
    logoURI:"https://cz.cash/images/tokens/BRAG.png"
  },[]
)


export const CZB = new WrappedTokenInfo({
  name: "CZBlue",
  symbol: "CZB",
  address: "0xD963b2236D227a0302E19F2f9595F424950dc186",
  chainId: 56,
  decimals: 18,
  logoURI: "https://cz.cash/images/tokens/CZB.png"
},[]
)


export const BANDIT = new WrappedTokenInfo({
  name: "🎭🔫💰🏴‍☠️👤",
  symbol: "BANDIT",
  address: "0x2a10CFe2300e5DF9417F7bEe99ef1e81228F0Ac7",
  chainId: 56,
  decimals: 18,
  logoURI: "https://cz.cash/images/tokens/BANDIT.png"
},[]
)

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token'
)

const WBNB_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WBNB_ONLY,
  [ChainId.MAINNET]: [
    ...WBNB_ONLY[ChainId.MAINNET],
    CZUSD,
    CZF,
    USDT,
    BTCB,
    DAI
  ]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {}
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WBNB_ONLY,
  [ChainId.MAINNET]: [CZUSD, CZR, CZB, LRT, LSDT, GEM, DGOD, BRAG, BANDIT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WBNB_ONLY,
  [ChainId.MAINNET]: [...WBNB_ONLY[ChainId.MAINNET], CZUSD, CZF, CZR, CZB, BANDIT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [CZUSD, WBNB],
    [CZUSD, CZB],
    [CZUSD, BANDIT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  /* INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },*/
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  } ,
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  /*LATTICE: {
    connector: lattice,
    name: 'Lattice',
    iconName: 'gridPlusWallet.png',
    description: 'Connect to GridPlus Wallet.',
    href: null,
    color: '#40a9ff',
    mobile: true
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }*/
}

export const NetworkContextName = 'NETWORK'

/// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 300
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 30

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 2%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 5%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 10%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(9900), BIPS_BASE) // 25%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(9900), BIPS_BASE) // 45%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(1000), JSBI.BigInt(10000))
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(1000), JSBI.BigInt(10000))
export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')
