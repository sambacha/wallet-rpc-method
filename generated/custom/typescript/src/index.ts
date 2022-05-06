import methodMapping from "./generated-method-mapping";
import openrpcDocument from "./openrpc.json";

type FMethodCallback = (
  originString: string,
  requestObject: { method: string; params: any }
) => Promise<any>;

interface Wallet {
  registerRpcMessageHandler: (fn: FMethodCallback) => any;
};

declare var wallet: Wallet;

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  const { method, params } = requestObject;
  if (method === "rpc.discover") {
    return openrpcDocument;
  }

  return await methodMapping[method](...params);
});

console.log('booted my-snap');
