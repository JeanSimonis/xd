import { providers } from 'ethers';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { SingleFixture } from '../components/SingleFixture';
import { Seaport1Fixture } from '../lib/fixtures/typed-signature/listing/Seaport1Fixture';

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
    <div className="bg-white flex min-h-screen flex-col items-center justify-center py-8 text-black">
      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-4 max-w-5xl">
        <div>⚠️ DISCLAIMER: THIS IS A DEMO SCAM WEBSITE. DO NOT CONFIRM ANY REQUESTS IT SENDS TO YOUR WALLET. ⚠️</div>
        <div className="flex gap-6 items-center">
          <img src="/unicat.png" alt="UNICAT" className="w-16 rounded-full" />
          <h1 className="text-5xl">UNICAT AIRDROP 3</h1>
          <img src="/unicat.png" alt="UNICAT" className="w-16 rounded-full" />
        </div>
        {address ? <div className="py-1">Connected: {address}</div> : <Button onClick={connect}>Connect</Button>}
        <p>
          It is time for the third UNICAT airdrop for users of Uniswap that like cats, and like other animals too! This
          time, we are giving away 10,000 UNICAT tokens to the first 10,000 users who claim it. This is a limited time
          offer, so claim now!
        </p>
        <p>
          We're trying to scam you by playing on your greed and making you think that we're giving you free money, but
          instead we'll steal your NFTs!
        </p>
        <SingleFixture
          title={
            <span>
              Click here to <span className="line-through">claim your airdrop</span> get scammed
            </span>
          }
          fixture={new Seaport1Fixture(address ?? '')}
          method="request"
          inverted
        />
        <div className="w-full flex pt-8">
          <Link href="/">
            <Button inverted>{'<'} Back to Index</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default KitchenSink;
