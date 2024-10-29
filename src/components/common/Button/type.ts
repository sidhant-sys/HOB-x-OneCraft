export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  iconEle?: React.ReactNode;
  iconId?: string;
  iconFillColor?: string;
  className?: string;
}
