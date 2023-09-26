import React from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "./Tooltip.css";
const TooltipWithTrigger = function ToolTip({ trigger, text }) {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <div>
      {React.cloneElement(trigger, { ref: setTriggerRef })}

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: "tooltip-container text-sm font-medium",
          })}
        >
          <div
            {...getArrowProps({
              className: "tooltip-arrow ",
            })}
          />
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipWithTrigger;
// bg-gray-800 text-white text-sm !after:text-gray-800 !before:text-gray-800 !after:bg-gray-800 !before:bg-gray-800

//  bg-gray-800 text-gray-600 !after:text-gray-800 !before:text-gray-800 !after:bg-gray-800 !before:bg-gray-800
