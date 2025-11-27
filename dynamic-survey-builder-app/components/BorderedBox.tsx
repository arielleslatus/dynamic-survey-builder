import { ReactNode } from "react";

export type BorderedBoxProps = {
  children: ReactNode;
};

export const BorderedBox: React.FC<BorderedBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-4 border-1 border-slate-300 border-solid p-4 rounded-sm w-full h-min">
      {children}
    </div>
  );
};
