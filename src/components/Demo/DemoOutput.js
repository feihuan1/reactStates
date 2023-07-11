import React from 'react'

import MyParagragh from "./MyParagragh"

const DemoOutput = (props) => {
console.log('Demo')

    return (
        <>
       <MyParagragh>{props.show ? "This is new" : ''}</MyParagragh>
        </>
    )
}

export default React.memo(DemoOutput)