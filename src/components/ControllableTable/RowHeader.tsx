/**
 * @name RowHeader
 * @description
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import { RowItem } from './types'

export type RowHeaderProps = { row: RowItem; index: number }

export default function RowHeader(props: RowHeaderProps) {
  return (
    <>
      <th className={cls('border')}>{props.index + 1}</th>
    </>
  )
}
