export interface IDropdownItemProps {
  text: string;
  icon?: React.ReactNode; // Accept an icon as a React node
  onClick?: () => void; // Optional onClick handler for each item
}
