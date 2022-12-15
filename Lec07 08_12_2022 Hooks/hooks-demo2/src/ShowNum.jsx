import React, { useContext } from 'react';
import { NumContext } from './NumContext';

export default function ShowNum() {
  const { num, minusNum } = useContext(NumContext);

  return (
    <div>
      ShowNum <br />
      num={num}
    </div>
  )
}
