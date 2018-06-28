import * as React from "react";

interface IProps {
    msg: string
}

const App: React.SFC<IProps> = (props) => <h1>{props.msg}</h1>

export default App;