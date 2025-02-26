import { Menu } from "lucide-react";
// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from "react";
import { ButtonAddTasks } from "./ButtonAddTask";

export function ButtonTask() {
  return <ButtonAddTasks />;
}

export function MenuBar() {
  return <Menu className="h-6 cursor-pointer text-2xl text-zinc-400" />;
}

type ContainerDivProps = ComponentProps<"div">;

export function ContainerDiv(props: ContainerDivProps) {
  return <div {...props} className="flex items-center gap-4" />;
}

type RootProps = ComponentProps<"div">;

export function Root(props: RootProps) {
  return (
    <header
      {...props}
      className="flex h-20 items-center justify-between bg-secondary px-8 py-6"
    />
  );
}
