import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateDiscountCode =():string=>{
  return `DISCOUNT2${Math.ceil(Math.random() * 5)}${Math.ceil(Math.random() * 5)}${Math.ceil(Math.random() * 5)}`
}
