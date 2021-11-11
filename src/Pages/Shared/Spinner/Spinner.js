import { useState } from 'react';
import { css } from '@emotion/react';
import { ScaleLoader } from 'react-spinners';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const Spinner=()=> {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  return (
    <div className='sweet-loading'>
      <ScaleLoader
        color={'red'}
        loading={loading}
        css={override}
        height={35}
        width={4}
        radius={2}
        margin={4}
      />
    </div>
  );
}

export default Spinner;
