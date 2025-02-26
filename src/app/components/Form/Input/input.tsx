// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

type LabelProps = ComponentProps<"label"> & {
  children: ReactNode;
};

export function Label({ children, className, ...props }: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      className={clsx("text-base font-bold text-[#B4ACF9]", className)}
      {...props}
    >
      {children}
    </label>
  );
}

type ControlProps = ComponentProps<"input">;

export function InputFild({ className, ...props }: ControlProps) {
  return (
    <input
      className={clsx(
        "w-full rounded-md bg-secondary p-4 text-xs font-medium text-white/80 outline-none",
        className,
      )}
      {...props}
    />
  );
}

type RootProps = ComponentProps<"div">;

export function FormRoot(props: RootProps) {
  return <div className="h-[60px]" {...props} />;
}
