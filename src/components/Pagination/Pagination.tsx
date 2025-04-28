import { usePagination } from "../../context/pagination"

export function Pagination() {
  const { totalPages } = usePagination()
  
  let totalPagesButtons: number = 0
  if(totalPages) {
    totalPagesButtons = 10
  }

  return (
    <div>
      <div>{'<<'} Primeiro </div>
      <div>{'<'} anterior </div>
      {totalPagesButtons && 
        new Array(totalPagesButtons).fill(null).map((_, i) => (
          <div key={i}>{i}</div>
        ))
      }
      <div> Próximo {'>'}</div>
      <div> Ultimo {'>>'} </div>
      <select>
        <option>mostrar 10</option>
        <option>mostrar 20</option>
        <option>mostrar 30</option>
        <option>mostrar 40</option>
        <option>mostrar 50</option>
      </select>
    </div>
  )
}
