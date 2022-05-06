import { SnapRpc } from "../generated-typings";

const snapRpc: SnapRpc = (target, origin, request) => {
  return Promise.resolve("hello1");
};

export default snapRpc;
