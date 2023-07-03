import { ReactNode } from 'react';
import { Fixture } from '../lib/fixtures/Fixture';
import { ApproveFixture } from '../lib/fixtures/transaction/ApproveFixture';
import { Seaport1Fixture } from '../lib/fixtures/typed-signature/listing/Seaport1Fixture';
import Button from './Button';

type Method = 'request' | 'sendAsync' | 'sendPromise' | 'sendCallback' | 'bypass';

interface Props {
  title: ReactNode;
  method: Method;
  fixture: Fixture;
  inverted?: boolean;
}

export const SingleFixture = ({ title, method, fixture, inverted }: Props) => {
  const onClick = async () => {
    try {
      const res = await fixture[method]();
      console.log(res);
      const message =
        fixture instanceof ApproveFixture
          ? 'Despite the warnings, you just signed an approval on this SCAM WEBSITE. Make sure to revoke it on Revoke.cash!'
          : fixture instanceof Seaport1Fixture
          ? "Despite the warnings, you just signed an NFT listing on this SCAM WEBSITE. Make sure you don't do that in the future!"
          : "Despite the warnings, you just signed a request on this SCAM WEBSITE. Make sure you don't do that in the future!";
      alert(message);
    } catch (e) {
      alert('Good job! You avoided the scam by rejecting the request.');
      console.error(e);
    }
  };
  return (
    <Button onClick={onClick} inverted={inverted}>
      {title}
    </Button>
  );
};
