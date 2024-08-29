"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeProvider, useTheme } from "next-themes";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="">
      <div onClick={() => setTheme("light")}>
        Light
      </div>
      <div onClick={() => setTheme("dark")}>
        Dark
      </div>
      <div onClick={() => setTheme("system")}>
        System
      </div>
    </div>
  );
}

export { ThemeProvider, ThemeToggle };
