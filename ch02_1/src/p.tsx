import type { FC, PropsWithChildren } from "react";

const P: FC<PropsWithChildren> = (props) => {
  return <p {...props} />;
};

export default P;
