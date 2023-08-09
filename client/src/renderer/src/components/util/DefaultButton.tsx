interface DefaultButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: string;
  className?: string;
}

const styling =
  'bg-gray-400 border-blue-500 border p-2 cursor-pointer select-none text-center active:scale-[.95]';

const disabledStyling =
  'bg-gray-400 border-gray-500 border p-2 cursor-pointer select-none text-center text-gray-500';

export const DefaultButton = ({
  onClick,
  disabled,
  children,
}: DefaultButtonProps) => {
  return (
    <div
      className={disabled ? disabledStyling : styling}
      onClick={() => !disabled && onClick()}
    >
      {children}
    </div>
  );
};
