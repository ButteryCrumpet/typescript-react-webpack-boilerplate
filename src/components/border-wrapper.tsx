import * as React from "react";

interface IProps {
    inner: string
}

const BorderWrapper: React.SFC<IProps> = (props) => {
    return <div dangerouslySetInnerHTML={{ __html: props.inner }} style={{border: "2px solid black"}}></div>
}

export default BorderWrapper