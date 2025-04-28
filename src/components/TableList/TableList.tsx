import { TableHeader, TableRow } from "./types"

interface TableListProps {
  headers: TableHeader[]
  rows: TableRow[]
}

export default function TableList({headers, rows}: TableListProps) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header.id}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.registro_id}>
            {Object.entries(row).map(field => <td key={field[0]}>{field[1]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
