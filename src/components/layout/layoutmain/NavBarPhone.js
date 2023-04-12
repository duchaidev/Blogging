import React from 'react';
import { useSelector } from 'react-redux';

const NavBarPhone = ({ className }) => {
    const showNavbar = useSelector((state) => state.darkMode.showNavbar);
    return (
        <>
            {/* <div className={` z-40 w-screen h-screen transition-all bg-[#CDCFD1] fixed  ${showNavbar ? 'opacity-25 visible' : 'invisible opacity-0'}`}></div>
            <div className={`${className} h-screen w-screen z-40 transition-all fixed ${showNavbar ? 'visible' : 'invisible opacity-0'}`}>
                <div className={`${showNavbar ? '' : '-translate-x-[120%]'} transition-all h-full w-[70%] absolute bg-[#1F2833]  !opacity-100 z-50`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse hic expedita illo molestias nemo accusamus ducimus, eum veritatis assumenda fugit? Optio doloremque tempore delectus cupiditate quod minus magnam aspernatur cumque.
                </div>
            </div> */}
        </>
    );
};

export default NavBarPhone;