/**
 * @name ColumnHeader
 * @description
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import { ColumnItem } from './types'

export type ColumnHeaderProps = { column: ColumnItem; index: number }

export default function ColumnHeader(props: ColumnHeaderProps) {
  return (
    <>
      <th id={props.column.id} className={cls('border')}>
        {String.fromCharCode(65 + props.index)}
      </th>
    </>
  )
}
