import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
interface PaginationContextType {
  registerPerPage?: number
  currentPage?: number
  setRegister?: number
  totalRegister?: number
  totalPages?: () => number | undefined
  setRegisterPerPage?: Dispatch<SetStateAction<number | undefined>>
  setCurrentPage?: Dispatch<SetStateAction<number | undefined>>
  setTotalRegister?: Dispatch<SetStateAction<number | undefined>>
}

const defaultPagination: PaginationContextType = {
  registerPerPage: 10,
  currentPage: 0
}

const PaginationContext = createContext<PaginationContextType | undefined>(defaultPagination);

export function PaginationProvider({ children }: { children: ReactNode }) {
  const [registerPerPage, setRegisterPerPage] = useState<number | undefined>(10)
  const [currentPage, setCurrentPage] = useState<number | undefined>(0)
  const [totalRegister, setTotalRegister] = useState<number | undefined>(0)

  const totalPages = () => {
    if(totalRegister && registerPerPage) {
      return totalRegister / registerPerPage
    }
  }

  return (
    <PaginationContext.Provider value={{
      registerPerPage,
      currentPage,
      totalPages,
      setTotalRegister,
      setRegisterPerPage,
      setCurrentPage,
    }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('');
  }
  return context;
}
