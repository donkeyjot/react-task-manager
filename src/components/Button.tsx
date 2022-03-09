import React, { FunctionComponent } from 'react';

export interface OwnProps {
    color: string,
    text: string,
    onClick: () => {},
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {

  return (
      <button
          className='btn'
          style={{backgroundColor: props.color, }}
          onClick={props.onClick}
      >
          {props.text}</button>
  );
};

export default Button;
