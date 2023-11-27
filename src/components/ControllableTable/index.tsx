/**
 * @name ControllableTable
 * @description
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import ColumnHeader from './ColumnHeader'
import RowHeader from './RowHeader'
import { TableContextProvider } from './context'
import { ControllableTableProps } from './types'

export default function ControllableTable(props: ControllableTableProps) {
  return (
    <TableContextProvider>
      <TableContent {...props} />
    </TableContextProvider>
  )
}

function TableContent(props: ControllableTableProps) {
  return (
    <>
      <table id={props.config?.id} className={cls(props.className)}>
        <thead>
          <tr>
            <th className='border'></th>

            {props.config?.columns.map((column, i) => (
              <ColumnHeader key={column.id} column={column} index={i} />
            ))}
          </tr>
        </thead>

        <tbody>
          {props.config?.rows.map((row, j) => (
            <tr key={row.id} id={row.id}>
              <RowHeader row={row} index={j} />

              {row.cells?.map((cell) => (
                <td key={cell.id} colSpan={cell.colSpan} rowSpan={cell.rowSpan} className={cls('border')}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
