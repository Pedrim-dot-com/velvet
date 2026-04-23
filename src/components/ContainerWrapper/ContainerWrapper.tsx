import type { ContainerWrapperProps } from './ContainerWrapper.types';

const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="min-h-screen bg-gradient-to-b from-transparent to-black/20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">{children}</div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
