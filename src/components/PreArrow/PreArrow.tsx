//@ts-nocheck
import useBreakpoint from "@/hooks/(utils)/useBreakpoint";
import clsx from "clsx";
import { BsChevronLeft } from "react-icons/bs";
import { CustomArrowProps } from "react-slick";

interface PrevArrowProps {
  props?: CustomArrowProps;
  breakpoints?: Array<Object>;
  customClassName?: string;
}
const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  const { style, onClick, currentSlide, breakpoints, customClassName } = props;

  const disabled = currentSlide === 0 && "bg-white" ;

  return (
    <div
      className={
        "absolute left-0 top-0 h-full  w-10 z-10"
      }
      style={{ ...style }}
    >
      <div className="h-full w-full flex justify-end items-center bg-transparent">
        {!disabled && (
          <div
            onClick={onClick}
            className={
              "-translate-x-full w-9 h-9 rounded-full bg-white opacity-60 hover:opacity-100 hover:bg-white flex items-center justify-center cursor-pointer"
            }
          >
            <BsChevronLeft size={18} className="text-black rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrevArrow;
