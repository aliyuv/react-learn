const Demo01 = (props) => {
  return React.createElement(
      'div',
      {},
      [
          React.createElement('h1', {}, props.name),
          React.createElement('p', {}, props.description)
      ]
  )
}

const App = () => {
  return React.createElement('div', {}, [
      React.createElement('div', {}, '这里是主页组件'),
      React.createElement(Demo01, {
          name: '你好世界',
          description: '这是一条描述信息'
      }),
      React.createElement(Demo01, {
          name: '你好世界',
          description: '这是一条描述信息'
      }),
      React.createElement(Demo01, {
          name: "The Hawaiian Pizza",
          description: "Sliced Ham, Pineapple, Mozzarella Cheese",
      }),
      React.createElement(Demo01, {
          name: "The Hawaiian Pizza",
          description: "Sliced Ham, Pineapple, Mozzarella Cheese",
      })
  ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))