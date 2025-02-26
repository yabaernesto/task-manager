import * as React from "react";

type AddIconProps = React.SVGProps<SVGSVGElement> & {
  onCopy?: React.ClipboardEventHandler<SVGSVGElement>;
};

export function AddIcon({ onCopy, ...rest }: AddIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onCopy={onCopy}
      {...rest}
    >
      <path
        d="M4 22h12v-2H4V8H2v12c0 1.103.897 2 2 2z"
        fill="#fff"
        fillOpacity={0.6}
      />
      <path
        d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3v2z"
        fill="#fff"
        fillOpacity={0.6}
      />
    </svg>
  );
}
