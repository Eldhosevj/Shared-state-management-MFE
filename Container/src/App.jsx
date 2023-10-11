import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import { StoreProvider, useStore ,ReduxButton} from "store/store";

const Header=React.lazy(()=>import("header/Header"))
import "./index.css";

const App = () => {

const { count, increment, clear}=useStore()
  
return(
  <div className="container" style={{border:"3px solid red"}}>
    <h1>Container</h1>
    <Suspense fallback={"...loading"}>
    <Header/>
    </Suspense>
<div style={{border:"5px solid black"}}>
  <h1>Footer</h1>
<h6>  { count}</h6>
<button onClick={increment}>Add</button>

</div>
    </div>
)
};
ReactDOM.render(
  <StoreProvider>
<App />
</StoreProvider>, document.getElementById("app"));
