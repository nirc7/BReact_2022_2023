import React, { useContext } from 'react'
import { NumContext } from './NumContext';

export default function ChangeNum() {
  const { minusNum, setNum } = useContext(NumContext);
  return (
    <div>
      ChangeNum <br />
      <button onClick={() => minusNum()}>minus</button> <br />
      <button onClick={() => setNum(7)}>change Num</button>
    </div>
  )
}
