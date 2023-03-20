import { useSelector } from "react-redux";
import ButtonGr from "./ButtonGr";

const ButtonGroup = () => {
  const buttonGroupData = useSelector(
    (state) => state.UImyleagues.selectedButton
  );
  return (
    <div className="flex justify-between px-3 w-full theme-gradient border border-black rounded-full py-[2px]">
      <ButtonGr
        text={"Upcoming"}
        isSelected={buttonGroupData.selectedBtns[0]}
        ind={0}
      />
      <ButtonGr
        text={"Ongoing"}
        isSelected={buttonGroupData.selectedBtns[1]}
        ind={1}
      />
      <ButtonGr
        text={"Completed"}
        isSelected={buttonGroupData.selectedBtns[2]}
        ind={2}
      />
    </div>
  );
};

export default ButtonGroup;
