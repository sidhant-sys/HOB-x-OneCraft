export interface IDropdownProps {
  background?: string;
  width?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
  itemHeight?: number; // Accept a prop for the maximum height of the dropdown items
  isActiveEle?: boolean;
}
