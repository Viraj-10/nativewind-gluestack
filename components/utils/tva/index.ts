import { tv } from "tailwind-variants";
import type {
  ClassValue,
  TV,
  TVCompoundVariants,
  TVDefaultVariants,
  TVReturnProps,
  TVVariants,
  TVCompoundSlots,
  TVReturnType,
} from "tailwind-variants";
import { deepMergeObjects } from "../deepMerge";
import { TVConfig } from "tailwind-variants/dist/config";

export function tva(options: any) {
  const parentVariants = Object.assign({}, options.parentVariants);
  delete options.parentVariants;
  options.variants = deepMergeObjects(parentVariants, options.variants);
  const callback = tv(options);

  return (inlineProps: any) => {
    const { parentVariants = {}, ...variant } = inlineProps;
    Object.assign(parentVariants, variant);
    return callback({ ...parentVariants });
  };
}
