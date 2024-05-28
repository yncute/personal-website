import React from "react";

const FullScreenContainer = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="justify-center flex-shrink-0 w-[95vw] h-full mb-[10vh] bg-midgray rounded snap-start"
    >
      {props.children}
    </div>
  );
});

export default FullScreenContainer;
