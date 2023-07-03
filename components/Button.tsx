import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
}

const Button = ({ children, className, inverted, ...props }: Props) => {
  const classes = twMerge(
    className,
    'px-3 py-1 rounded-lg border',
    inverted ? 'border-black text-black' : 'border-white text-white'
  );

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
