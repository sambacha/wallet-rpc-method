export type Endowment = string;
export type JSONRPCString = "2.0";
export type StringDoaGddGA = string;
export type NumberHo1ClIqD = number;
export type JSONRPCID = StringDoaGddGA | NumberHo1ClIqD;
/**
 *
 * the name of the method
 *
 */
export type JSONRPCMethod = string;
export type JSONRPCParamsAsArray = any[];
export interface JSONRPCParamsAsObject { [key: string]: any; }
export type JSONRPCParams = JSONRPCParamsAsArray | JSONRPCParamsAsObject;
export type SnapName = string;
export type SourceCode = string;
/**
 *
 * An array of the names of the endowments
 *
 */
export type Endowments = Endowment[];
export type Target = string;
export type Origin = string;
export interface JsonRpcRequest {
  jsonrpc: JSONRPCString;
  id?: JSONRPCID;
  method: JSONRPCMethod;
  params?: JSONRPCParams;
  [k: string]: any;
}
export type OK = "OK";
export type SnapRpcResult = any;
/**
 *
 * Generated! Represents an alias to any of the provided schemas
 *
 */
export type AnyOfSnapNameSourceCodeEndowmentsTargetOriginJsonRpcRequestOKOKOKSnapRpcResult = SnapName | SourceCode | Endowments | Target | Origin | JsonRpcRequest | OK | SnapRpcResult;
export type Ping = () => Promise<OK>;
export type Terminate = () => Promise<OK>;
export type ExecuteSnap = (snapName: SnapName, sourceCode: SourceCode, endowments?: Endowments) => Promise<OK>;
export type SnapRpc = (target: Target, origin: Origin, request: JsonRpcRequest) => Promise<SnapRpcResult>;