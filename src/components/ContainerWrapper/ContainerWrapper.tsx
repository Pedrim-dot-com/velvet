import type { ContainerWrapperProps } from './ContainerWrapper.types';

const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="min-h-screen bg-linear-to-b from-transparent via-black/10 to-black/30">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">{children}</div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
