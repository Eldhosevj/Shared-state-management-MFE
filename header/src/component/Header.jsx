import React from 'react';
import { StoreProvider, useStore ,ReduxButton} from "store/store";
function Header(props) {
    const { count, increment, clear}=useStore()
    return (
        <div style={{border:"5px solid blue"}}>
            <h1>Header</h1>
           <h6> {count + " from header"}</h6>
            <button onClick={clear}>
            reset count
            </button>
        </div>
    );
}

export default Header;