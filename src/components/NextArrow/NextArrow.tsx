//@ts-nocheck
import { BsChevronRight } from "react-icons/bs";
import { CustomArrowProps } from "react-slick";
import useBreakpoint from "src/hooks/useBreakpoint";

interface NextArrowProps {
  props?: CustomArrowProps;
  breakpoints?: Array<Object>;
  customClassName?: string;
  currentSlide?:number;
  numberItem?:number
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
  const {
    style,
    onClick,
    currentSlide,
    slideCount,
    breakpoints,
    customClassName,
    numberItem
  } = props;
  // const item = useBreakpoint(breakpoints);
  const disabled = slideCount - numberItem === currentSlide;

  return (
    <div
      className={
        "absolute right-0 top-0 h-full  w-10 z-10  "
      }
      style={{ ...style }}
    >
      <div className={`h-full w-full flex items-center bg-transparent ${disabled && 'hidden'}`}>
        {!disabled && (
          <div
            onClick={onClick}
            className={
              "translate-x-full w-9 h-9 rounded-full bg-white opacity-60 hover:opacity-100 hover:bg-white flex items-center justify-center cursor-pointer"
            }
          >
            <BsChevronRight size={18} className="text-black rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NextArrow;
