import React from "react";

type Props = {
  rightContent?: React.ReactNode;
  leftContent: string;
};

export default function ComponentHeader({ rightContent, leftContent }: Props) {
  return (
    <div className="flex justify-between">
      <h1 className="text-[##212636] text-[32px] font-medium">{leftContent}</h1>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
}
