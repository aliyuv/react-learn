const Demo01 = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, '你好世界，欢迎学习react内容'),
            React.createElement('p', {}, '我是一名菜鸡 react use people')
        ]
    )
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('div', {}, '这里是主页组件'),
        React.createElement(Demo01),
        React.createElement(Demo01),
        React.createElement(Demo01),
        React.createElement(Demo01)
    ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))