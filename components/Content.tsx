import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface IContentProps {
  children?: ReactNode;
  className?: string;
}

const Content: FC<IContentProps> = ({ children, className }) => {
  return <div className={cx("py-10 px-40", className)}>{children}</div>;
};

export default Content;
