"use client";

export default function useCSSVariables() {
  const setProperty = (name: string, value: string) => {
    document.documentElement.style.setProperty(name, value);
  };
  const getProperty = (name: string) => {
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement).getPropertyValue(name);
    } else {
      return "";
    }
  };

  return { setProperty, getProperty };
}
