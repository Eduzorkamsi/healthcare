import React from 'react';

const CreditCard = props => {
  return (
    <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path 
    d="M15 4.43367C15 3.79527 14.48 3.27527 13.8416 3.27527H2.1584C1.52 3.27527 1 3.79527 1 4.43367V5.08327H15V4.43367ZM1.0016 7.03047V11.5729C1.0016 12.2129 1.52 12.7329 2.16 12.7329H13.84C14.48 12.7329 15 12.2129 15 11.5729V7.03047H1.0016ZM5.2992 11.0801C5.2992 11.1281 5.2592 11.1665 5.2128 11.1665H2.72C2.6736 11.1665 2.6336 11.1281 2.6336 11.0801V10.2689C2.6336 10.2225 2.6736 10.1825 2.72 10.1825H5.2128C5.2592 10.1825 5.2992 10.2225 5.2992 10.2689V11.0801Z"
    stroke={props.active ? '#336CFB' : props.stroke}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
    </svg>
  );
};

CreditCard.defaultProps = {
  width: '100',
  height: '200',
  stroke: "#DBDDE0"
};

export default CreditCard;