import React from 'react';
import { Activity, Users, Database, Coins } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { PoolStats } from '../types/pool';

function Dashboard() {
  const { data: stats } = useQuery<PoolStats>({
    queryKey: ['poolStats'],
    queryFn: async () => {
      // Replace with actual API call
      return {
        poolHashrate: 45000,
        minerHashrate: 1200,
        blockchainHeight: 789456,
        connectedPeers: 24,
        paymentThreshold: 0.1,
        poolFee: 1,
        pendingBlocks: 3,
        confirmedBlocks: 1567,
        poolEffort: 102,
        totalPaid: 125.45,
        coinPrice: 245.67,
        blockReward: 6.25,
        blockValue: 1535.44,
        timeToFindBlock: 360
      };
    }
  });

  const stats_display = [
    { label: 'Pool Hashrate', value: `${stats?.poolHashrate.toLocaleString()} H/s`, icon: Activity },
    { label: 'Connected Miners', value: stats?.connectedPeers, icon: Users },
    { label: 'Network Height', value: stats?.blockchainHeight.toLocaleString(), icon: Database },
    { label: 'Coin Price', value: `$${stats?.coinPrice}`, icon: Coins },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats_display.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="border border-green-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon className="w-5 h-5 mr-2" />
                <h3 className="font-medium">{stat.label}</h3>
              </div>
              <p className="text-2xl font-mono">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-green-800 rounded-lg p-4">
          <h3 className="font-bold mb-4">Mining Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Pool Fee:</span>
              <span>{stats?.poolFee}%</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Threshold:</span>
              <span>{stats?.paymentThreshold} coins</span>
            </div>
            <div className="flex justify-between">
              <span>Pool Effort:</span>
              <span>{stats?.poolEffort}%</span>
            </div>
            <div className="flex justify-between">
              <span>Total Paid:</span>
              <span>{stats?.totalPaid} coins</span>
            </div>
          </div>
        </div>

        <div className="border border-green-800 rounded-lg p-4">
          <h3 className="font-bold mb-4">Block Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Pending Blocks:</span>
              <span>{stats?.pendingBlocks}</span>
            </div>
            <div className="flex justify-between">
              <span>Confirmed Blocks:</span>
              <span>{stats?.confirmedBlocks}</span>
            </div>
            <div className="flex justify-between">
              <span>Block Reward:</span>
              <span>{stats?.blockReward} coins</span>
            </div>
            <div className="flex justify-between">
              <span>Block Value:</span>
              <span>${stats?.blockValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;