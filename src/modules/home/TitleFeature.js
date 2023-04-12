import React from "react";
import { NavLink } from "react-router-dom";

const TitleFeature = ({ to, children }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center justify-start gap-4">

          <NavLink to={to}>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {children}
            </h2>
          </NavLink>
          <div className="hidden xs:block">
            <NavLink to={to}>
              <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9237 59.8473C24.0054 59.8474 18.2199 58.0924 13.299 54.8043C8.37808 51.5163 4.54268 46.8428 2.27782 41.375C0.0129629 35.9072 -0.579625 29.8905 0.574993 24.0859C1.72961 18.2812 4.57958 12.9493 8.76449 8.76445C14.3763 3.15267 21.9875 -5.91298e-08 29.9237 0C37.86 5.91297e-08 45.4712 3.15267 51.083 8.76445C56.6948 14.3762 59.8475 21.9874 59.8475 29.9237C59.8475 37.86 56.6948 45.4712 51.083 51.083C48.3108 53.8703 45.0133 56.0802 41.3813 57.5846C37.7493 59.089 33.855 59.8581 29.9237 59.8473ZM29.9237 3.98988C15.6239 3.98988 3.98993 15.6238 3.98993 29.9237C3.98993 44.2236 15.6239 55.8575 29.9237 55.8575C44.2236 55.8575 55.8576 44.2236 55.8576 29.9237C55.8576 15.6238 44.2236 3.98988 29.9237 3.98988Z" fill="white" />
                <path d="M26.347 45.2986L23.526 42.4775L36.0795 29.9237L23.526 17.3699L26.347 14.5488L41.722 29.9237L26.347 45.2986Z" fill="white" />
              </svg>
            </NavLink>
          </div>
        </div>
        <div className="xs:hidden">
          <NavLink to={to}>
            <span className="dark:text-[#66FCF1] text-black">Xem tất cả</span>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default TitleFeature;
