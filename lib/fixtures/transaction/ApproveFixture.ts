import { Fixture } from '../Fixture';

export class ApproveFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0x6b175474e89094c44da98b954eedeac495271d0f',
      data: '0x095ea7b300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000056bc75e2d63100000',
    };

    super('eth_sendTransaction', [data]);
  }
}
