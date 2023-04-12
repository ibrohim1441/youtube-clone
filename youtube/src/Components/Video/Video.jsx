import React from 'react';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import logo from "../..//img/Black.png";
import me from "../../img/Userpic.png";

import { useState, useEffect } from "react";
import "../Video/Video.scss"

export const Video = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });


  return (
    <>
      <header className="header_box">
        <div className="container">
          <div className="header_box py-1 pr-7 flex items-center justify-between">
            <div className=" flex items-center gap-12">
              <div className="logo flex gap-7 items-center">
                <div className=" hover:bg-zinc-300 ..., cursor-pointer rounded-full p-3">
                  <GiHamburgerMenu className=" text-2xl " />
                </div>

                <div className="">
                  <NavLink className="flex items-center">
                    <img src={logo} alt="logo" />
                  </NavLink>
                </div>
              </div>

              <div className="input_search">
                <form className="form flex items-center gap-2">
                  <div className="flex w-full text-lg items-center bg-slate-200 p-0 rounded-full ">
                    <input
                      type="text"
                      className=" input_one text-base  border border-gray-300 rounded-l-full py-2 pl-7"
                      placeholder="Search"
                    />
                    <div className="icon py-3 px-4">
                      <AiOutlineSearch className=" " />
                    </div>
                  </div>

                  <div className="voice-icons rounded-full p-2 bg-zinc-100 hover:bg-zinc-300 ..., cursor-pointer">
                    <MdKeyboardVoice className=" text-2xl" />
                  </div>
                </form>
              </div>
            </div>

            <div className="header_items_navRight ">
              <div className="icons flex items-center gap-">
                <div className="camera_icon hover:bg-zinc-300 ..., cursor-pointer rounded-full p-2">
                  <MdOutlineVideoCameraBack className=" text-3xl text-stone-400" />
                </div>
                <div className="bell_icons hover:bg-zinc-300 ..., cursor-pointer rounded-full p-2">
                  <HiOutlineBell className=" text-3xl text-stone-400  " />
                </div>
                <div className="profil w-10 rounded-full">
                  <img src={me} alt="profile_photo" className="rounded-full" />
                </div>
                <div>
                  {/* <button onClick={handleClick} className="darkmode"> <MdOutlineDarkMode /> </button> */}
                  <button onClick={handleClick} className="text-3xl ml-4 mt-2">
                    {" "}
                    <BsSun />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
