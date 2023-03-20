import Image from "next/image";
import { useDispatch } from "react-redux";
import { UIcompetitionActions } from "@/store/UICompetitionsReducer";

const CapsuleButton = ({ text, img, isDailySelected, selected }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isDailySelected ? (
        <div className=" cursor-pointer flex flex-col items-center theme-gradient w-[45%] py-1 rounded-full drop-shadow-lg active:scale-90 transition-transform delay-[10ms]">
          <Image
            src={img}
            width={20}
            height={20}
            style={{
              filter:
                "invert(84%) sepia(34%) saturate(3148%) hue-rotate(337deg) brightness(112%) contrast(98%)",
            }}
          />
          <p className="text-[11px] text-yellow-theme">{text}</p>
        </div>
      ) : (
        <div
          className="cursor-pointer flex flex-col items-center slow-theme-gradient w-[45%] py-1 rounded-full drop-shadow-lg active:scale-90 transition-transform delay-[10ms]"
          onClick={() => {
            // setselected([!selected[0], !selected[1]]);
            if (selected[0]) {
              dispatch(
                UIcompetitionActions.setCompType({
                  type: "leagues",
                  capsuleButton: [!selected[0], !selected[1]],
                })
              );
            } else {
              dispatch(
                UIcompetitionActions.setCompType({
                  type: "daily",
                  capsuleButton: [!selected[0], !selected[1]],
                })
              );
            }
          }}
        >
          <Image
            src={img}
            width={20}
            height={20}
            style={{
              filter:
                "invert(41%) sepia(5%) saturate(306%) hue-rotate(201deg) brightness(91%) contrast(100%)",
            }}
          />
          <p className="text-[11px] text-gray-theme">{text}</p>
        </div>
      )}
    </>
  );
};

export default CapsuleButton;
