import React from 'react';

function Connect() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Connect to Pool</h2>

      <div className="border border-green-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Connection Details</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold mb-2">Stratum Connection:</h4>
            <div className="bg-green-900 p-3 rounded font-mono">
              stratum+tcp://pool.example.com:3032
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Alternative Connection (IP):</h4>
            <div className="bg-green-900 p-3 rounded font-mono">
              stratum+tcp://192.168.1.1:3032
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-2">Example Miner Configurations:</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-sm mb-1">XMRig:</h5>
                <pre className="bg-green-900 p-3 rounded font-mono text-sm overflow-x-auto">
                  {`./xmrig -o stratum+tcp://pool.example.com:3032 -u YOUR_WALLET_ADDRESS -p x`}
                </pre>
              </div>

              <div>
                <h5 className="font-bold text-sm mb-1">T-Rex:</h5>
                <pre className="bg-green-900 p-3 rounded font-mono text-sm overflow-x-auto">
                  {`t-rex -a ethash -o stratum+tcp://pool.example.com:3032 -u YOUR_WALLET_ADDRESS -p x -w rig0`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Getting Started</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Download and install your preferred mining software</li>
          <li>Replace YOUR_WALLET_ADDRESS with your actual wallet address</li>
          <li>Choose the closest stratum server to your location</li>
          <li>Start mining and monitor your progress in the dashboard</li>
        </ol>
      </div>
    </div>
  );
}

export default Connect;