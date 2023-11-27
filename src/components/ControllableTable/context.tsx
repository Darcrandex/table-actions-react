import { PropsWithChildren, createContext, useContext, useState } from 'react'

export type TableContextValue = {
  selectedIds?: string[]
  setSelectedIds?: React.Dispatch<React.SetStateAction<string[] | undefined>>

  selectedColumnId?: string
  setSelectedColumnId?: React.Dispatch<React.SetStateAction<string | undefined>>

  selectedRowId?: string
  setSelectedRowId?: React.Dispatch<React.SetStateAction<string | undefined>>
}

const TableContext = createContext<TableContextValue>({})

export const TableContextProvider = (props: PropsWithChildren) => {
  const [selectedIds, setSelectedIds] = useState<string[]>()
  const [selectedColumnId, setSelectedColumnId] = useState<string>()
  const [selectedRowId, setSelectedRowId] = useState<string>()

  return (
    <TableContext.Provider
      value={{
        selectedIds,
        setSelectedIds,
        selectedColumnId,
        setSelectedColumnId,
        selectedRowId,
        setSelectedRowId,
      }}
    >
      {props.children}
    </TableContext.Provider>
  )
}

export function useTableContext() {
  return useContext(TableContext)
}
