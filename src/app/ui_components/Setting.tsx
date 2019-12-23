import React from "react";
import PropTypes from "prop-types";
//////  ICONS  ///////
import arrowDown from "../assets/img/icons/arrow-down-solid.svg";
import arrowUp from "../assets/img/icons/arrow-up-solid.svg";
//////  UTILS  ///////
//import C from "../utils/Constants";
import F from "../utils/Functions";
//import L from "../utils/Logger";

interface Props {
  name: string;
  value: number;
  increment: () => void;
  decrement: () => void;
}

const Setting: React.FC<Props> = ({ name, value, increment, decrement }) => {
  return (
    <div id={name.concat("-setting")} className="flex-col-aiC">
      <label id={name.concat("-label")} className="white-txt">
        {F.capitalise(name)} Length
      </label>
      <div
        id={name.concat("-controls")}
        className="flex-row-aiC flex-jcSE w-75p"
      >
        <div
          id={name.concat("-increment")}
          className="icon icon-s-square"
          onClick={increment}
        >
          <img src={arrowUp} alt="++" className="full-icon" />
        </div>
        <span id={name.concat("-length")} className="white-txt">
          {value}
        </span>
        <div
          id={name.concat("-decrement")}
          className="icon icon-s-square"
          onClick={decrement}
        >
          <img src={arrowDown} alt="--" className="full-icon" />
        </div>
      </div>
    </div>
  );
};

Setting.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Setting;
