import React from "react";

const AddIcon:React.FC<{className?:string}> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className ||"fill-custom-black"}>
    <g id="vuesax_outline_add" data-name="vuesax/outline/add" transform="translate(-492 -252)">
      <g id="add">
        <path id="Vector" d="M12.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h12a.755.755,0,0,1,.75.75A.755.755,0,0,1,12.75,1.5Z" transform="translate(497.25 263.25)" fill="current"/>
        <path id="Vector-2" data-name="Vector" d="M.75,13.5A.755.755,0,0,1,0,12.75V.75A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v12A.755.755,0,0,1,.75,13.5Z" transform="translate(503.25 257.25)" fill="current"/>
        <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 252)" fill="none" opacity="0"/>
      </g>
    </g>
  </svg>
  
  )
}

export default AddIcon