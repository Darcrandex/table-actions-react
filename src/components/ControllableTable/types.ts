import React from 'react'

export type ControllableTableProps = {
  className?: string
  config?: TableConfig
  onConfigChange?: React.Dispatch<React.SetStateAction<TableConfig | undefined>>
}

export type TableConfig = {
  id: string
  columns: ColumnItem[]
  rows: RowItem[]
}

export type ColumnItem = {
  id: string
  width?: number
}

export type RowItem = {
  id: string
  height?: number
  cells?: DataCell[]
}

export type DataCell = {
  id: string
  colSpan?: number
  rowSpan?: number
  hidden?: boolean
}
