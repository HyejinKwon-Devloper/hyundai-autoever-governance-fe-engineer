interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  mode?: 'round-md' | 'round-sm';
  isActive?: boolean;
}
import styles from '@/app/component/button/button.module.css';

export default function Button(props: IButton) {
  const {
    children,
    mode = '',
    isActive = false,
    className = '',
    ...extra
  } = props;

  return (
    <button
      type="button"
      className={`${className} ${isActive ? styles.active : ''}${mode}`}
      {...extra}
    >
      {children}
    </button>
  );
}
