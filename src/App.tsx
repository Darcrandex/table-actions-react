/**
 * @name App
 * @description
 * @author darcrand
 */

import { useState } from 'react'
import ControllableTable from './components/ControllableTable'
import { TableConfig } from './components/ControllableTable/types'
import { uid } from './utils/uid'

export default function App() {
  const [tableConfig, setTableConfig] = useState<TableConfig | undefined>({
    id: uid(),
    columns: [{ id: uid(), width: 120 }, { id: uid() }, { id: uid() }],
    rows: [{ id: uid(), cells: [{ id: uid() }, { id: uid() }, { id: uid() }] }],
  })

  return (
    <>
      <ControllableTable config={tableConfig} onConfigChange={setTableConfig} className='m-4' />
    </>
  )
}
