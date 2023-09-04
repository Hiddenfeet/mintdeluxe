export const liquidContractAddress: string = '0x960EBe11745d323C0E79B161cc7c9fe37dDFd00A'
export const passContractAddress: string = '0xf601FfEA6A76E83921750361E613d82286c4Ad9B'

export interface ChainConfig {
  name: string;
  chain_id: string;
  chain_id_hex: string;
  write_rpc: string;
  read_rpc: string;
  symbol: string;
  explorer: string;
}

export const chainConfig: ChainConfig = {
  name: "Cronos Mainnet",
  chain_id: "25",
  chain_id_hex: "0x19",
  write_rpc: "https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa",
  read_rpc: "https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa",
  symbol: "GETH",
  explorer: "https://cronoscan.com/",
}