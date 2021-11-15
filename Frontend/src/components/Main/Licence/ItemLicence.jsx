import React from "react";

const ItemLicence = ({ fieldName, value }) => {
  return (
    <>
      <h3 className="px-4 text-center pb-2 text-sm">
        <span className="font-semibold">{fieldName}: </span>
        {value.toLowerCase()}
      </h3>
    </>
  );
};

export default ItemLicence;
