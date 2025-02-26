import { ArrowRight, MoveDown } from "lucide-react";
import Link from "next/link";
// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from "react";

interface ProfileProps extends ComponentProps<"img"> {
  name: string;
}

export function Profile({ name, className, ...props }: ProfileProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img className={className} {...props} />
      <div className="flex flex-col text-center">
        <span className="hidden text-sm font-medium text-white lg:flex">
          {name}
        </span>
        <span className="flex cursor-pointer items-center gap-1 text-xs font-bold text-primaryColor">
          <Link
            href="/dashboard/profile"
            className="hidden text-xs font-bold lg:flex"
          >
            My account
          </Link>
          <ArrowRight className="hidden h-3 w-3 text-white/80 lg:flex" />
          <MoveDown className="h-4 w-4 font-bold text-white/80 lg:hidden" />
        </span>
      </div>
    </div>
  );
}
