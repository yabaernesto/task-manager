// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, ReactNode } from "react";

interface SpanIconOfText extends ComponentProps<"label"> {
  children: ReactNode;
}

export function SpanText({ children, ...props }: SpanIconOfText) {
  return (
    <span
      {...props}
      className="w-full cursor-pointer px-4 py-2 text-base font-medium text-gray-200"
    >
      {children}
    </span>
  );
}

export function SpanIcon({ children, ...props }: SpanIconOfText) {
  return (
    <span
      {...props}
      className="flex h-[60px] w-16 items-center justify-center rounded-s-lg bg-[#B4ACF9]"
    >
      {children}
    </span>
  );
}

type RootProps = ComponentProps<"div">;

export function Root(props: RootProps) {
  return (
    <div
      {...props}
      className="flex h-[60px] w-full items-center rounded-md bg-[#363041]"
    />
  );
}
