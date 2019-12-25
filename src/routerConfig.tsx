import React, {LazyExoticComponent} from "react";

const Home = React.lazy(() => import('./views/Home'));
const JsonView = React.lazy(() => import('./views/JsonView'));
const UrlStrToObj = React.lazy(() => import('./views/UrlStrToObj'));
const ObjectToStr = React.lazy(() => import('./views/ObjectToStr'));
const Selection = React.lazy(() => import('./views/Selection'));

interface RouteType {
    path: string;
    title: string;
    component: LazyExoticComponent<any>;
    children?: RouteType[];
    to?: string;
}

const routes: RouteType[] = [
    {
        path: '/',
        to: '/home',
        title: '主页',
        component: Home,
    },
    {
        path: '/home',
        title: '主页',
        component: Home,
    },
    {
        path: '/jsonview',
        title: 'json 解析工具',
        component: JsonView
    },
    {
        path: '/strtobj',
        title: 'url 查询字符串解析成对象',
        component: UrlStrToObj
    },
    {
        path: '/objtostr',
        title: 'obejct 对象转换成查询字符串',
        component: ObjectToStr
    },
    {
        path: '/selection',
        title: 'Selection 对象示例',
        component: Selection
    },
];

export default routes;