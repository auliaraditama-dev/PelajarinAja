import { linkedContext } from "./linkedContexts.js";

export function everydayContext(topic, variantIndex = 0) {
  const value = linkedContext(topic, variantIndex);
  return {
    key: value.key,
    text: `${value.intro} ${value.bridge}`
  };
}
