import React from 'react';

function Hello({color, name, isSecial}) {
  
    return (
    <div style={{color}}>
        {isSecial && <b>*</b>}
        안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
    name : "이름없음"
}

export default Hello;