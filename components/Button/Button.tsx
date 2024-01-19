import * as React from "react";
import { createButton } from "@gluestack-ui/button";
import { tv, VariantProps } from "tailwind-variants";
import { cn, tva } from "@components/utils";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const GlueStackButton = createButton({
  Root: Pressable,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: View,
});

const button = tv({
  base: "group/button items-center justify-center rounded-md text-sm font-medium web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-1 web:focus-visible:ring-slate-950 web:disabled:pointer-events-none web:disabled:opacity-50 web:dark:focus-visible:ring-slate-300",
  variants: {
    variant: {
      default:
        "bg-slate-900 text-slate-50 web:shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
      destructive:
        "group/destructive bg-red-500 text-slate-50 web:shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
      outline:
        "border border-slate-200 bg-white web:shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      secondary:
        "bg-slate-100 text-slate-900 web:shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
      ghost:
        "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      link: "text-slate-900 web:underline-offset-4 web:hover:underline dark:text-slate-50",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;
const buttonText = tva({
  base: "text-sm font-medium web:transition-colors",
  parentVariants: {
    variant: {
      default: "text-red-500 dark:text-slate-900",
      destructive: "text-slate-50 dark:text-slate-50",
    },
    size: {
      default: "",
      sm: "text-xs",
    },
  },
  variants: {
    variant: {
      outline: "text-slate-900 dark:text-slate-50",
    },
    size: {
      lg: "text-base",
    },
  },
});

const Button = React.forwardRef(
  ({ className, variant, size = "default", ...props }: any, ref) => {
    return <GlueStackButton ref={ref} {...props} />;
  }
);

const ButtonText = React.forwardRef(
  ({ className, variant, size, ...props }: any, ref) => {
    console.log(
      "Object",
      buttonText({ parentVariants: { variant: "default" }, size: "" })
    );
    return (
      <GlueStackButton.Text
        ref={ref}
        {...props}
        className={cn(buttonText({ size: "" }))}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, ButtonText };
