import Image from "next/image";
import { useDispatch } from "react-redux";
import { UIcompetitionActions } from "@/store/UICompetitionsReducer";

const SportIcon = ({ img, text, index, selected }) => {
  const dispatch = useDispatch();
  return (
    <>
      {selected ? (
        <div className="flex flex-col w-[12%] h-8 items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]">
          <Image
            src={img}
            alt="cricketlogo"
            width={20}
            height={20}
            style={{
              filter:
                "invert(41%) sepia(36%) saturate(4423%) hue-rotate(338deg) brightness(90%) contrast(88%)",
            }}
          />
          <p className="text-[10px] text-center font-semibold text-red-theme">
            {text}
          </p>
        </div>
      ) : (
        <div
          className="flex flex-col w-[12%] h-8 items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]"
          onClick={() => {
            if (index === 0) {
              // setselected([true, false, false]);
              dispatch(UIcompetitionActions.setSportCat([true, false, false]));
            } else if (index === 1) {
              // setselected([false, true, false]);
              dispatch(UIcompetitionActions.setSportCat([false, true, false]));
            } else if (index === 2) {
              // setselected([false, false, true]);
              dispatch(UIcompetitionActions.setSportCat([false, false, true]));
            }
          }}
        >
          <Image
            src={img}
            alt="cricketlogo"
            width={20}
            height={20}
            style={{
              filter:
                "invert(34%) sepia(52%) saturate(10%) hue-rotate(202deg) brightness(99%) contrast(93%)",
            }}
          />
          <p className="text-[10px] text-center text-gray-theme">{text}</p>
        </div>
      )}
    </>
  );
};

export default SportIcon;
