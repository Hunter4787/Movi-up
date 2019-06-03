import React, { Component } from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
display: block;
margin: 0 auto;
border-color: red;  
`;
class Spinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className='sweet-loading'>
      <ClipLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={true}
      />
    </div>);
  }
}

export default Spinner;