import { forwardRef } from "react";
function Image({ ...props }, ref) {
  return <img ref={ref} {...props}></img>;
}

export default forwardRef(Image);
