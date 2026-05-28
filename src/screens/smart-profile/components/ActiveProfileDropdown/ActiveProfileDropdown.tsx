"use client";

import React from "react";
import {
  MenuTrigger,
  Button,
  Popover,
  Menu,
  MenuItem,
  Separator,
  Header,
} from "react-aria-components";
import { useActiveProfileDropdown } from "./useActiveProfileDropdown";

export const ActiveProfileDropdown = () => {
  const {
    activeProfileName,
    profileOptions,
    handleSelectProfile,
    handleCreateVariant,
  } = useActiveProfileDropdown();

  return (
    <MenuTrigger>
      <Button className="flex flex-col items-start px-6 py-4 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 min-w-[280px] outline-none focus-visible:ring-2 focus-visible:ring-[#00a18a] transition-all hover:bg-gray-50/50 cursor-pointer">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#00a18a]"></div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
            Active Profile
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[15px] font-bold text-[#1e293b]">
            {activeProfileName}
          </span>
          <span className="material-symbols-outlined text-gray-500 font-bold">
            expand_more
          </span>
        </div>
      </Button>
      <Popover
        placement="bottom end"
        offset={8}
        className="min-w-[280px] bg-white rounded-[24px] shadow-xl border border-gray-100 p-2 outline-none entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95"
      >
        <Menu className="outline-none">
          <Header className="text-[10px] font-black text-gray-400 tracking-wider px-4 py-3 uppercase">
            Switch Profile View
          </Header>

          {profileOptions.map((option, index) => {
            return (
              <React.Fragment key={option.id || `profile-${index}`}>
                <MenuItem
                  onAction={() => handleSelectProfile(option)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl outline-none cursor-pointer transition-colors group ${option.isActive
                    ? "bg-[#00a18a]/10"
                    : "focus:bg-gray-50"
                    }`}
                >
                  <span
                    className={`material-symbols-outlined transition-colors ${option.isActive
                      ? "text-[#00a18a]"
                      : "text-gray-400 group-hover:text-gray-600"
                      }`}
                  >
                    {option.icon}
                  </span>
                  <span
                    className={`text-[14px] transition-colors ${option.isActive
                      ? "font-bold text-[#008f7a]"
                      : "font-semibold text-gray-600 group-hover:text-gray-800"
                      }`}
                  >
                    {option.name}
                  </span>
                </MenuItem>
              </React.Fragment>
            );
          })}

          <Separator className="my-2 border-b border-gray-100 mx-2" />

          <MenuItem
            onAction={handleCreateVariant}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl outline-none focus:bg-[#00a18a]/5 cursor-pointer text-[#00a18a] transition-colors hover:bg-[#00a18a]/5 group"
          >
            <span className="material-symbols-outlined text-[18px]">
              add_circle
            </span>
            <span className="text-[14px] font-bold">Create New Profile</span>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};
