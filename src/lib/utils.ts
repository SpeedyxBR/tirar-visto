// Função utilitária para combinar classes Tailwind de forma inteligente usando clsx e tailwind-merge
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
