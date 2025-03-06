import { type FC, Fragment, type ReactNode } from 'react';

type FirstTruthyProps = {
  states: boolean[];
  children: ReactNode[];
};

export const FirstTruthy: FC<FirstTruthyProps> = ({ states, children }) => {
  const activeIndex = states.findIndex(Boolean);
  return (
    <Fragment>
      {children[activeIndex >= 0 ? activeIndex : children.length - 1]}
    </Fragment>
  );
};
