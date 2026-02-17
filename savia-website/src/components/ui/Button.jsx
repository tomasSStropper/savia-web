import { ArrowRight } from 'lucide-react';

const Button = ({ children, variant = 'primary', href, onClick, className = '', icon = true }) => {
  const baseClasses = 'px-8 py-4 font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2 text-base';

  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary shadow-md hover:shadow-lg',
    secondary: 'border-2 border-white/30 text-white hover:bg-white/10',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    light: 'bg-white text-primary hover:bg-light shadow-md hover:shadow-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
};

export default Button;
