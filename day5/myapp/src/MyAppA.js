import { Suspense } from "react";

let fullfilled = false;
let promise = null;

const useTimeOut = (m) => {
    if (!fullfilled) {
        throw promise || new Promise((res) => {
            setTimeout(() => {
                fullfilled = true;
                res();
            }, m);
        })
    }
}

const Main = () => {
    useTimeOut(5000);
    return <div>Component Loaded...</div>
}

const MyAppA = () => {
    return <Suspense fallback={"Loading....."}>
        <Main />
    </Suspense>
}

export default MyAppA;
