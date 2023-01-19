export interface ButtonType {
  type: "button" | "submit";
  className: string;
  name: string;
  fontSize: number;
  width: number;
  height: number;
  onClick?: () => void;
}

export interface ImageButtonType {
  type: "button" | "submit";
  imgSrc: string;
  width: number;
  height: number;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}
