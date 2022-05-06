
import { Transport } from "@open-rpc/client-js/build/transports/Transport";
import { JSONRPCRequestData, IJSONRPCData } from "@open-rpc/client-js/build/Request";

class MetaMaskTransport extends Transport {
  public uri: string;

  constructor(uri: string) {
    super();
    this.uri = uri;
  }
  public async connect(): Promise<any> {
    const results = await (window as any).ethereum.request({
      method: "wallet_enable",
      params: [{
        wallet_snap: {
          [this.uri]: {},
        }
      }],
    });
    return results;
  }

  public async sendData(data: JSONRPCRequestData, timeout: number | undefined = 5000): Promise<any> {
    return (window as any).ethereum.request({
      method: 'wallet_invokeSnap',
      params: [this.uri, (data as IJSONRPCData).request],
    });
  }

  public close(): void {
    // noop
  }
}

export default MetaMaskTransport;