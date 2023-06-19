import React, { Dispatch, SetStateAction } from "react";
import styles from "./sound-mode.module.css";

export interface SoundModeProps {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const SoundMode: React.FC<SoundModeProps> = ({ isMuted, setIsMuted }) => {
  const handleClick = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
  };
  return (
    <label>
      Sound?
      <button onClick={handleClick} aria-label="change sound">
        {isMuted ? <>off</> : <>on</>}
      </button>
    </label>
  );
};

export default SoundMode;

//label
//toggle
