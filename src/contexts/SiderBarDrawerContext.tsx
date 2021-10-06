import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderBarDrawerProviderProps {
  children: ReactNode;
}

type SiderBarDrawerContextData = UseDisclosureReturn

const SiderBarDrawerContext = createContext({} as SiderBarDrawerContextData);

export function SiderBarDrawerProvider({ 
    children }: SiderBarDrawerProviderProps
  ) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SiderBarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContext.Provider>
  )
}

export const useSiderBarDrawer = () => useContext(SiderBarDrawerContext)