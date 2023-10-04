
"use client";
import React, { useEffect, useState } from 'react'
import { BsLightbulbOff,BsLightbulbFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system"  ? systemTheme : theme;
  return (
    <>
        { mounted && ( currentTheme === "dark" ? (
            <BsLightbulbFill className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
        ) : (
            <BsLightbulbOff className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
        ))}
    </>
  )
}
