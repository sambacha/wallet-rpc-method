import { ExecuteSnap } from "../generated-typings";

const executeSnap: ExecuteSnap = (snapName, sourceCode, endowments) => {
  return Promise.resolve("OK");
};

export default executeSnap;
