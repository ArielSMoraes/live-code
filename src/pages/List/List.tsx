import './List.css'
import { useQuery } from '@tanstack/react-query';
import TableList from '../../components/TableList/TableList'
import { headers, rows } from '../../components/TableList/mock'
import { getRegisters } from '../../api/register';
import { Pagination } from '../../components/Pagination/Pagination';
import { usePagination } from '../../context/pagination';
import { TableRow } from '../../components/TableList/types';
import { useEffect, useState } from 'react';

function List() {
  const data = rows
  const [registerToShow, setRegisterToShow] = useState<TableRow[]>([])
  const { registerPerPage, currentPage, setTotalRegister } = usePagination()

  // const REGISTER_PER_PAGE = 2
  // const currentPage = 0

  // const { data } = useQuery({
  //   queryKey: ['getRegisters'],
  //   queryFn: getRegisters,
  //   initialData: []
  // })

  useEffect(() => {
    if(setTotalRegister) {
      setTotalRegister(data.length)
    }

    if (currentPage !== undefined && data && registerPerPage !== undefined) {
      setRegisterToShow(data.slice(currentPage * registerPerPage, (currentPage + 1) * registerPerPage))
    }
  }, [currentPage, data, registerPerPage])

  return (
    <>
      <h1>Resultado</h1>
      {<TableList headers={headers} rows={registerToShow} />}
      <Pagination />
    </>
  )
}

export default List
