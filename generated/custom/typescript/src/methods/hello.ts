import { Hello } from "../generated-typings";

const hello: Hello = () => {
  return Promise.resolve("world");
};

export default hello;
