interface DefaultButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
}

export const DefaultButton = ({
  onClick,
  children,
  className,
}: DefaultButtonProps) => {
  return (
    <div
      className={
        className
          ? className
          : 'bg-gray-400 border-blue-500 border p-2 cursor-pointer select-none text-center active:scale-[.95]'
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};
