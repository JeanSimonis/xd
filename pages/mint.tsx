import { providers } from 'ethers';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { SingleFixture } from '../components/SingleFixture';
import { ApproveFixture } from '../lib/fixtures/transaction/ApproveFixture';

declare let window: Window & {
  ethereum: any;
};

const KitchenSink: NextPage = () => {
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    const connectIfAlreadyConnectedBefore = async () => {
      const provider = new providers.Web3Provider(window.ethereum, 'any');
      const [connectedAddress] = await provider.listAccounts();
      if (connectedAddress) setAddress(connectedAddress);
    };
    connectIfAlreadyConnectedBefore();
  }, []);

  const connect = async () => {
    const provider = new providers.Web3Provider(window.ethereum, 'any');
    const [newAddress] = await provider.send('eth_requestAccounts', []);
    setAddress(newAddress);
  };

  return (
    <div className="bg-black flex min-h-screen flex-col items-center justify-center py-2 text-white">
      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-4 max-w-5xl">
        <div>⚠️ DISCLAIMER: THIS IS A DEMO SCAM WEBSITE. DO NOT CONFIRM ANY REQUESTS IT SENDS TO YOUR WALLET. ⚠️</div>
        <h1 className="text-5xl">Crazy Capuchins Mint Website</h1>
        {address ? <div className="py-1">Connected: {address}</div> : <Button onClick={connect}>Connect</Button>}
        <img src="/capuchin.png" alt="Crazy Capuchins #1" className="border-2 border-white rounded-lg" />
        <p>Free mint • 941/1000 minted</p>
        <p>
          Wow, look how cute that monkey is! And it's almost sold out. We're trying to activate your FOMO so we can
          trick you into signing something you shouldn't!
        </p>
        <SingleFixture
          title={
            <span>
              Click here to <span className="line-through">mint a monkey</span> get scammed
            </span>
          }
          fixture={new ApproveFixture(address ?? '')}
          method="request"
        />
        <div className="w-full flex pt-8">
          <Link href="/">
            <Button>{'<'} Back to Index</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default KitchenSink;
