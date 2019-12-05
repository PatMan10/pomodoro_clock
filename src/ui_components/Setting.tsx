import React from "react";
import PropTypes from "prop-types";
//////  UTILS  ///////
//import C from "../utils/Constants";
import F from "../utils/Functions";
//import L from "../utils/Logger";

interface Props {
  name: string;
  value: number;
  incerement: () => void;
  decerement: () => void;
}

const Setting: React.FC<Props> = ({ name, value, incerement, decerement }) => {
  return (
    <div id={name.concat("-setting")} className="flex-col-aiC">
      <label id={name.concat("-label")}>{F.capitalise(name)} Length</label>
      <div
        id={name.concat("-controls")}
        className="red-bg flex-row-aiC flex-jcSE"
      >
        <i
          id={name.concat("-increment")}
          className="fas fa-arrow-up"
          onClick={incerement}
        ></i>
        <span id={name.concat("-length")}>{value}</span>
        <i
          id={name.concat("-decrement")}
          className="fas fa-arrow-down"
          onClick={decerement}
        ></i>
      </div>
    </div>
  );
};

Setting.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  incerement: PropTypes.func.isRequired,
  decerement: PropTypes.func.isRequired
};

export default Setting;
