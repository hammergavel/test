import { useDispatch } from "react-redux";
import { UIMyLeaguesActions } from "@/store/UIMyLeaguesReducer";

const ButtonGr = ({ text, isSelected, ind }) => {
  const dispatch = useDispatch();
  return (
    <>
      {!isSelected ? (
        <div
          className="w-[30%] py-1 text-xs tracking-tight bg-light-gray-theme text-center rounded-full cursor-pointer text-gray-theme hover:bg-white hover:text-gray-900 active:scale-95 transition-transform"
          onClick={() => {
            if (ind === 0) {
              dispatch(
                UIMyLeaguesActions.setSelectedButton({
                  selectedText: "upcoming",
                  selectedBtns: [true, false, false],
                })
              );
            } else if (ind === 1) {
              dispatch(
                UIMyLeaguesActions.setSelectedButton({
                  selectedText: "upcoming",
                  selectedBtns: [false, true, false],
                })
              );
            } else if (ind === 2) {
              dispatch(
                UIMyLeaguesActions.setSelectedButton({
                  selectedText: "upcoming",
                  selectedBtns: [false, false, true],
                })
              );
            }
          }}
        >
          {text}
        </div>
      ) : (
        <div className="w-[30%] py-1 text-xs font-medium tracking-tight bg-yellow-theme text-center rounded-full cursor-pointer text-darkblue-theme active:scale-95 transition-transform">
          {text}
        </div>
      )}
    </>
  );
};

export default ButtonGr;
