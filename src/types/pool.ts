export interface PoolStats {
  poolHashrate: number;
  minerHashrate: number;
  blockchainHeight: number;
  connectedPeers: number;
  paymentThreshold: number;
  poolFee: number;
  pendingBlocks: number;
  confirmedBlocks: number;
  poolEffort: number;
  totalPaid: number;
  coinPrice: number;
  blockReward: number;
  blockValue: number;
  timeToFindBlock: number;
}

export interface Miner {
  address: string;
  hashrate: number;
  workers: Worker[];
  earnings: number;
  payouts: Payout[];
}

export interface Worker {
  id: string;
  hashrate: number;
  shares: number;
  lastSeen: Date;
}

export interface Block {
  height: number;
  hash: string;
  reward: number;
  effort: number;
  status: 'pending' | 'confirmed';
  timestamp: Date;
}

export interface Payout {
  txHash: string;
  amount: number;
  timestamp: Date;
}