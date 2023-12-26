import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const Loading = <div className={'bg-red-700'}>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
//lazy는 모든 컴포넌트를 미리 로드하지 않고, 필요한 컴포넌트를 필요한 시점에 로드하므로 로딩 시간이 단축된다.


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },
])

export default root