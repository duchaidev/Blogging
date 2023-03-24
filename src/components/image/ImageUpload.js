import React, { Fragment } from "react";
import Trash from "../icon/Trash";
import Loading from "../loading/Loading";
const ImageUpload = (props) => {
  const {
    name,
    className = "",
    progress = 0,
    image = "",
    handleDeleteimg = () => {},
    ...rest
  } = props;
  return (
    <label
      className={`w-full mt-2 border border-dashed border-gray-200 aspect-video relative bg-[#788DA9] rounded-lg cursor-pointer flex items-center justify-center ${className}  overflow-hidden group`}
    >
      <input
        type="file"
        className=" hidden-input"
        onChange={() => {}}
        {...rest}
      />
      {!image && progress === 0 && (
        <div className="flex flex-col w-[20%] gap-4 items-center absolute">
          <img src="/imgUpload.jpg" alt="" className="w-[100%] object-cover" />
          <span className="font-medium text-gray-200 whitespace-nowrap">
            Choose Photos
          </span>
        </div>
      )}
      {image && (
        <Fragment>
          <img src={image} alt="img" className="object-cover w-full h-full" />
          <button
            type="button"
            className="absolute z-8 w-[18%] p-6 bg-stone-500 rounded-full aspect-square transition-all opacity-0 cursor-pointer invisible group-hover:opacity-100 group-hover:visible"
            onClick={handleDeleteimg}
          >
            <Trash></Trash>
          </button>
        </Fragment>
      )}
      {!image && progress > 0 && (
        <Fragment>
          <Loading size="60px" borderSize="8px" color="#A9FFF9"></Loading>
        </Fragment>
      )}
      {!image && (
        <div
          className={`absolute h-1 bg-green-500 bottom-0 left-0 transition-all`}
          style={{
            width: `${Math.ceil(progress)}%`,
          }}
        ></div>
      )}
    </label>
  );
};

export default ImageUpload;
