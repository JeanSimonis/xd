import { providers } from 'ethers';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ScamCard from '../components/ScamCard';

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
      <main className="flex w-full flex-1 flex-col justify-start text-center gap-4 max-w-lg p-4 pb-16">
        <h1 className="text-5xl text-left">Demo Scam Websites</h1>
        <p className="text-left">
          Welcome to our Demo Scam Website collection. This website is meant to demonstrate how scammers try to trick
          you into signing something you shouldn't. Below we've listed a few links to different pages using different
          methods to scam you. This website can help you understand the risks of phishing and it's a good way to try out
          the{' '}
          <a href="https://revoke.cash/extension" className="underline">
            Revoke.cash Browser Extension
          </a>
        </p>
        <h2>Demo Scam Websites:</h2>
        <ScamCard title="Scam NFT Mint" image="/capuchin.png" href="/mint">
          On this demo website you will see an NFT that is almost fully minted. Scammers try to play into your FOMO to
          get you to click a mint button. But rather than minting an NFT, you're actually signing a transaction that
          gives an approval for your tokens.
        </ScamCard>
        <ScamCard title="Scam Airdrop" image="/unicat.png" href="/airdrop">
          On this demo website you will see a fake claim page for an airdrop for the "UNICAT" token. But rather than
          claiming an airdrop, you're actually signing a signature that lists your NFTs for sale for 0 ETH.
        </ScamCard>
        {/* <ScamCard title="Fake Revoke Website" image="/revoke-icon.png" href="/revoke">
          On this demo website you will see a fake version of Revoke.cash that tries to make you scared that your
          account is compromised. But rather than revoking approvals, you're actually signing a Permit signature that
          gives an approval for your tokens.
        </ScamCard> */}
      </main>
    </div>
  );
};

export default KitchenSink;
