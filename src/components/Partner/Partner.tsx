import {
   Partner1,
   Partner2,
   Partner3,
   Partner4,
   Partner5,
   Partner6,
   Partner7,
   Partner8,
   Partner9,
   Partner10,
   Partner11,
   Partner12,
   Partner13,
   Partner14,
   Partner15,
   Partner16,
} from 'src/assets/index';
const Partner = () => {
   return (
      <div className=" flex flex-col gap-y-5 ">
         <div className="w-full mt-2 opacity-50 text-white flex justify-center text-xs font-semibold tracking-wider text-contentDesc uppercase">
            Đối tác âm nhạc
         </div>
         <div className="w-full">
            <div className={'flex flex-wrap item-center gap-4 p-5 rounded '}>
               {partners.map((partner, index) => (
                  <div
                     key={index}
                     className="flex items-center justify-center bg-white rounded-md p-2 "
                  >
                     <img
                        alt={'Partner'}
                        src={partner.img || ''}
                        sizes=""
                        className="aspect-video object-contain w-20 h-20"
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="w-full flex justify-center text-xs font-semibold tracking-wider text-contentDesc/50 uppercase text-center">
            <h2>This clone is for educational purpose only.</h2>
         </div>
      </div>
   );
};

const partners: Array<{ img: string }> = [
   { img: Partner1 },
   { img: Partner2 },
   { img: Partner3 },
   { img: Partner4 },
   { img: Partner5 },
   { img: Partner6 },
   { img: Partner7 },
   { img: Partner8 },
   { img: Partner9 },
   { img: Partner10 },
   { img: Partner11 },
   { img: Partner12 },
   { img: Partner13 },
   { img: Partner14 },
   { img: Partner15 },
   { img: Partner16 },
   { img: Partner14 },
   { img: Partner10 },
   { img: Partner3 },
   { img: Partner5 },



];
export default Partner;
