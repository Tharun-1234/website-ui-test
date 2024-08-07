// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Arrow1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.733 8.707a1 1 0 000-1.414L13.37.929a1 1 0 10-1.414 1.414L17.612 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h19.026V7H0v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow1Icon;
/* prettier-ignore-end */
