import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SiderBarDrawerProviderProps {
  children: ReactNode;
}

type SiderBarDrawerContextData = UseDisclosureReturn

const SiderBarDrawerContext = createContext({} as SiderBarDrawerContextData);

export function SiderBarDrawerProvider({ 
    children }: SiderBarDrawerProviderProps
  ) {
  const disclosure = useDisclosure()

  return (
    <SiderBarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContext.Provider>
  )
}

export const useSiderBarDrawer = () => useContext(SiderBarDrawerContext)