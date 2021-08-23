# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 什麼是 React.js？

[【Day 2】React.js介紹 && 第一個 React 程式 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10213886)

React 是 facebook 開發的一個 JavaScript UI 函式庫

![截圖 2021-08-19 下午3.54.17.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/39269cda-53a5-4ae6-80d7-dc1779999c44/截圖_2021-08-19_下午3.54.17.png)

透過一個個 component 組成一個完整的頁面，component 就是一個不可分割的原子，
而一個頁面則是由許許多多 component 所組合而成
（可以想像一個按鈕可以是一個 component，一個表單也能是一個 component）

React 的幾個著名特色:

- 不同於一般由後端生成 HTML 送至前端，React 使用 JS 在前端產生 HTML。
- 使用 Virtual DOM 的概念，使重新渲染時效率比較高。
- 能夠自定義 component ，每個 component 可以控管自己的狀態 (state)，也能傳資料 (props) 給子元件 (child component)。
- 只負責 MVC 的 View 部份，因此不算框架，彈性高。
- 完全由 JS 操作 UI ，使得它可以跟後端分離，達到即時互動、自動更新的效果。

## 重要觀念

1. One Data Flow：
當一個 component 改變時，只有他的 child 會知道（往下），他的 parent 不受影響
2. Virtual DOM：
不再直接操作 DOM，而是當有改變發生時，用 JS 物件模擬特定的 DOM 結構，
再跟真實的 DOM 比對，最後把有變動的部分改動到真實的 DOM 上

## Create React App

[Getting Started | Create React App](https://create-react-app.dev/docs/getting-started/)

在本地端建立作業環境，使用 terminal 輸入

```jsx
npx create-react-app my-app
cd my-app
npm start
```

便會自動建立好 react 專案架構（package.json 等等），其中包含了 index.js 和 App.js

### index.js

index.js 的工作就是負責渲染我們所建構的最大的元件
（也就是包住所有小元件的 component）至頁面上

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

前面五行是引入模組的 ES6 語法
下半部的程式碼的意思為：「將 App 這個 component 渲染至 DOM 中 id 為 root 的地方」

那 App component 從哪裡來？
從上面的引入模組中可看到 `import App from './App';`  表示他是從 App.js 檔案而來

### App.js

在 React 中，建構一個 component 可以是一個 class 或是 function 的形式
Udemy 課程中會先以 class 實作，後面再帶入 function 的形式

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Welcome to React</p> 
      </div>
    )
  }
}

export default App;
```

上面程式碼可以簡單分為三段：

1. 套件引入
2. component 本體
3. 將 component 匯出讓其他檔案能使用（被 index.js 引入使用）

---

## JSX 語法

React 是藉由 JS 產生 HTML，如果用原生 JS 寫會很痛苦，
所以建議使用 JSX 語法，最後再透過 babel 等工具轉換為正常 JS

### JSX 怎麼寫？

HTML 的語法基本上在 JSX 都是通用的，有一些比較特殊的：

1. HTML 的 class 屬性在 JSX 須寫為 className (class 為 JSX 保留字)

    ```jsx
    <div className="testClass">Test</div>
    ```

2. JSX 中所有元素都需要關閉

    ```jsx
    <div>content</div> 或 <img /> (self-closing)
    ```

3. 事件觸發需使用駝峰式命名

    ```jsx
    <div onClick={() => console.log('click test'}>Click Me</div>
    ```

4. style 屬性要用 JS 物件的格式撰寫，採用駝峰式命名法而不是 -，
單位要用單引號包住（例： '50%'），外面則要再加上一層大括號

    ```jsx
    <p style={{fontSize: '15px', marginTop: '20px'}}>Some text</p>
    ```

5. 在 JSX 中還是可以撰寫 JS，但是要使用大括號包起來

6. return 後面如果有多行 html 元素，要用括號包起來

    ```jsx
    class App extends Component {
      render() {
        return (
          <div>
            <h1>Hello World!</h1>
            <p>Welcome to React</p>
          </div>
        )
      }
   }
    ```

## 創建第一個 react component

- 使用 tachyons css 套件？

    [Typography](https://tachyons.io/docs/typography/text-align/)

    在 html 內直接輸入 `className=""`，有已設定好的 css 樣式

- class 寫法

    ```jsx
    class App extends Component {
      render() {
        return (
          <div>
            <h1>Hello World!</h1>
            <p>Welcome to React</p>
          </div>
        )
      }
    }
    ```

- function 寫法

    ```jsx
    const App = (props) => {
      return (
    	  <div>
          <h1>Hello World!</h1>
          <p>{props.greeting}</p>
        </div>
    	)
    }
    ```

### 只能 return 一個 element

因為在 index.js 裏，一次也只能 return 一個 element，變成如果要同時使用多個 component 的時候
要把他們全部包在一個 `<div></div>` 

在 React 16.2 推出一個新的解法：Fragment

[Rendering child elements in React using Fragments - LogRocket Blog](https://blog.logrocket.com/rendering-child-elements-react-fragments/)

- 原本的做法是用 `<div></div>`：

    ```jsx
    function FAQ() {
      return (
        <div>
          <p>Q. What is React?</p>
          <p>A. A JavaScript library for building user interfaces</p>
          <p>Q. How do I render sibling elements?</p>
          <p>A. Use Fragments</p>
        </div>
      );
    }
    ```

- 現在可以使用 `<Fragment></Fragment>`：

    ```jsx
    import React, {Fragment} from "react";

    function FAQ() {
      return (
        <Fragment>
          <p>Q. What is React?</p>
          <p>A. A JavaScript library for building user interfaces</p>
          <p>Q. How do I render sibling elements?</p>
          <p>A. Use Fragments</p>
        </Fragment>
      );
    }
    ```

- 或是直接使用空的 tag  `<></>`：

    但此方式目前還無法使用 `key` 

    ```jsx
    function FAQ() {
      return (
        <>
          <p>Q. What is React?</p>
          <p>A. A JavaScript library for building user interfaces</p>
          <p>Q. How do I render sibling elements?</p>
          <p>A. Use Fragments</p>
        </>
      );
    }
    ```

## react 的父子關係

React 的概念是由小元件組成大元件最後形成整個頁面，
而這樣的架構勢必會出現像 HTML 一樣的父子層級關係

當 B 元件被 A 元件引用 import，則 A 就是 B 的父元件

---

# Props

Props 是 Properties 的縮寫，可以理解成由父層傳給子層的資料。

與 state 不同的地方是：
state 是讓元件控制自己本身的狀態
props 是讓外部元件對自己進行狀態配置
state 可以改變，而 props 卻是唯讀的，不能被改變

傳 props 的寫法很像 HTML tag 的 attribute，
差別在因為變數是 JS 語法因此用**大括弧**包起來

在父層寫入：

```jsx
<Hello greeting={'Hello'+'I love React'}/>
```

在子層（Hello.js）讀取該 props：

```jsx
<p>{this.props.greeting}</p>
```

# State

[[第二十一週] React 基礎：狀態 state、setState、props](https://yakimhsu.com/project/project_w21_03_React_basic_state_props_setState.html)

用來控制 component 內部的顯示狀態，只能在 component 內部使用，
也可傳給子 component 讓它當成 props 使用

- State 的資料結構跟 Props 一樣，只是一個 JavaScript Object，
而 State 只能在 Class Components 中使用
- 會在 Component Class 的 `constructor()` 中用 `this.state` 來**初始化** State 物件
- 要改變 State，必須使用 `this.setState()` ，裡面傳一個 object

### 設定 state

以前只有寫成 class 形式的 component 可以設定 state，隨著 hook 的推出，可以使用 **useState**

[使用 State Hook - React](https://zh-hant.reactjs.org/docs/hooks-state.html)

- 在 class 形式中，須在 constructor 內初始化 state

    ```jsx
    class App extends Component {
      constructor() {
        super();   // 記得呼叫 parent 的 constructor，很重要
        this.state = {
          counter : 1
        }
      }
      render() {
        return (
          <div>
            <p>{ this.state.counter }</p>
          </div>
        )
      }
    }
    ```

- 使用 useState hook

    ```jsx
    import React, { useState } from 'react';

    function Example() {
      // 宣告一個新的 state 變數，我們叫他「count」，初始值是 0
      const [count, setCount] = useState(0);
    	// count 為 state 變數，setCount 則是負責改變 state 變數的函式

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    ```

    ⚠️ 一個 component 可以有多個 state 唷

    ⚠️ state 在這裡不需要一定是 object

    ```jsx
    function ExampleWithManyStates() {
      // 宣告多個 state 變數!
      const [age, setAge] = useState(42);
      const [fruit, setFruit] = useState('banana');
      const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
      // ...
    }
    ```

📍 [補充資料：Hook 概觀 - React](https://zh-hant.reactjs.org/docs/hooks-overview.html)

## 正確使用 State

1. 不要直接修改 state，要使用 `this.setState()`

    唯一可以指定 `this.state` 值的地方是在 `constructor`

2. State 的更新可能是非同步的

    React 可以將多個 `setState()` 呼叫批次處理為單一的更新，來提高效能

    因為 `this.props` 和 `this.state` 可能是非同步的被更新，
    不應該依賴它們的值來計算新的 state

    ```jsx
    // 錯誤
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
    ```

    要修正這個問題，使用第二種形式的 `setState()`，它接受一個 function 而不是一個 object。Function 將接收先前的 state 作為第一個參數，並且將更新的 props 作為第二個參數：

    ```jsx
    // 正確
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
    ```

# Component method 生命週期

[React.Component - React](https://zh-hant.reactjs.org/docs/react-component.html#constructor)

Component method 可以分為三種階段，每階段內都有不同的 method：

- Mounting：當 component 的 instance 被建立，並且顯示在 DOM 上
- Updating：當 props 或是 state 改變時，重新渲染 DOM (re-render)
- Unmounting：當 component 將要從 DOM 被移除的時候

內建 Life Cycle 裡的方法， `this` 都指向 component 本身，
若是自訂新增的方法，則需使用 `bind` 指定 `this`，或是 Arrow function 讓 `this` 自動綁定

![截圖 2021-08-23 上午10.05.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15beb65f-b3ab-4742-b507-d535540147a7/截圖_2021-08-23_上午10.05.50.png)

## Mounting

### `constructor()`

通常在 React 中 constructor 只會有幾種用途：

- 透過指定一個 `this.state` 物件來初始化[內部 state](https://zh-hant.reactjs.org/docs/state-and-lifecycle.html)
- 為 [event handler](https://zh-hant.reactjs.org/docs/handling-events.html) 方法綁定 instance
- 使用 bind 指定 this

當你為一個 React.Component subclass 建立 constructor 時，應該在其他任何宣告之前
呼叫 `super(props)`。否則，`this.props` 在 constructor 中的值會出現 undefined 的 bug

避免在 constructor 中產生任何 side effect 或 subscription
如果需要它們的話，使用 `componentDidMount()`

**注意：避免複製 prop 到 state 之中！這是一個很常見的錯誤：**

```jsx
constructor(props) {
	super(props);
	// 請不要這樣做！
	this.state = { color: props.color };
}
```

這樣做的問題是：一來這毫無必要（你可以直接用 `this.props.color`），
二來這會產生 bug（任何改變對 `color` prop 所產生的更新都不會出現在 state 中）。

**請在只有刻意要忽略 prop 更新的情況下才使用這個模式。** 
在這種情況下，比較合理的做法是將 prop 重新命名為 `initialColor` 或 `defaultColor`。
如此一來，可以在必要的情況下透過[修改一個 component 的 `key`](https://zh-hant.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 來強迫它「重置」初始的 state。

若想知道如何處理 state 依賴 prop 的情況，請參考 [關於避免 derived state 的部落格文章](https://zh-hant.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

### `render()`

當每次 props 或是 state 被改變時，就會被執行一次

是所有 method 裡面唯一必須要寫的方法，並且要回傳一個 React element，
回傳的 element 要有一個根元件包覆

**「The render function should be pure」**
要保持 render 的乾淨，不能在裡面使用 `setState`，也就是不在 `render()` 中修改 state，
或是和瀏覽器互動，因為它只會在當下執行一次，若是在這邊調用任何改變畫面的操作，
都會讓顯示不正確，也讓 component 顯得複雜難懂。

### `componentDidMount()`

只有在 `componentDidMount` 這個 function 被觸發以後，
Component 才會真正的出現在 DOM 上面。

`ComponentDidMount()` 的時間點就是在 「 `constructor()` 執行之後、和執行`render()` 之後 」

如果需要從 remote endpoint 請求資料的話此處非常適合進行 network request，
ajax API 串接或綁定 DOM 事件都會在這個函式中執行

```jsx
componentDidMount() {
    // 模擬 ajax 請求
    fetch('some url')
        .then((res) => res.json())
        .then((data) => console.log(data))
}
```

若是在這裏綁定了 DOM eventListener，記得在 unmounting 階段移除監聽，
否則若重新渲染則 componentDidMount 將再次被觸發，造成過多的綁定事件

這兩個函式大部分會是成對出現，在不同時機負責不同任務：

- Component render 之後的初始化： `componentDidMount`
- Component 銷毀之前取消 `componentDidMount` 的動作： `componentWillUnmount`

## Updating

### `componentDidUpdate()`

```jsx
componentDidUpdate(prevProps, prevState, snapshot)
```

`componentDidUpdate()` 會在更新後馬上被呼叫，但並不會在初次 render 時被呼叫

在 component 更新之後，可以在此處對 DOM 進行運作，也適合做網路請求
但如果 prop 沒有改變的話，網路請求可能並非必要

```jsx
componentDidUpdate(prevProps) {
  // 常見用法（別忘了比較 prop）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

可以馬上在 componentDidUpdate() 內呼叫 `setState()`，
但注意必須要被包圍在一個類似上述範例的條件語句內，否則會進入一個無限迴圈

注意：
如果 `shouldComponentUpdate()` 回傳的值為 false 的話，
`componentDidUpdate()` 將不會被呼叫。

## Unmounting

### `componentWillUnmount()`

當 component 將要從 DOM 被移除前，會執行這個方法

當 component 裡面有做 setInterval，或是 addEventListener... 等，
在 `componentDidMount()` 裡面做的設定，若需要被終止、移除、清理，就需要在這個方法中執行，例如 `clearInterval`、`removeEventListener`...等

---

# 製作 robofriends 作業

### 資源

- 隨機產生圖片的 API

[RoboHash](https://robohash.org/)

## 製作步驟

### 1. 製作機器人卡片

要一次顯示多張 cards >> 使用 `.map()`

原本先手動重複：

```jsx
const Card = () => {
    return (
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        </div>
    );
}
```

直接用 map 做迴圈：

```jsx
const CardList = ({ robots }) => {
    const CardArray = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
        { CardArray }
        </div>
    );
}
```

但若你開啟 console 會有個警告說：
Each child in an array or iterator should have a unique `key` props. 

這是因為如果沒有給 array 中每個 items 不同的 key，react 不會知道哪個是哪一個
假設你今天刪掉了第三張卡片，他不知道是哪一張，所以還是會重新更新全部卡片，
但若每張卡片有各自的 key ，react 就會知道你刪掉的是第三個，可以省去大幅修改 DOM 

可以把 key props 加進去：

```jsx
const CardList = ({ robots }) => {
    const CardArray = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
        { CardArray }
        </div>
    );
}
```

⚠️ 上面示範雖然是使用 index 作為 key 值，但其實最好要用不會改變的值（id）
      因為 index 可能會因為 array items 增加或減少而變更

可以再簡化 code 如下：

```jsx
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card  
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />)
                })
            }
        </div>
    );
}
```

### 2. 製作 searchbox

- 先把所有 component 包在 App 下面，讓 App 當爸爸！
- 製作 searchbox component 包在 App 裏面
- 讓 searchbox 有辦法互動

    需要讓 cards 和 searchbox 這兩個兄弟 component 互動，但因為 one data flow 的原則
    必須透過他們的爸爸 App 來當中間媒介，所以在 App 中設定 state 傳給兩個兄弟當作 props 

    1. 因為要設定 state，所以這邊改回 class 形式

        ```jsx
        class App extends Component {
        	constructor() {
        		super()
            this.state = {
        	    robots: robots,
              searchfield: ''
        	  }
          }

          // 做 search 的 fn
          onSearchChange(e) {
        		console.log(e.target.value)
        	}

        	render() {
        	  return (
        	    <div className='tc'>
        	      <h1>Imaginary Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots} />
        	    </div>
            )
          }
        }
        ```

    2. search 的 fn 被當成 props 傳進 SearchBox，只要有 input 改變就會觸發該 event

        📍 這邊使用 HTML 的 `onChange` event 來監聽 searchbox

        ```jsx
        // search 的 fn 被當成 props 傳進此 component
        const SearchBox = ({ searchChange }) => {
            return (
                <div className='pa2'>
                    <input 
                        className='pa3 ba b--blue bg-washed-yellow'
                        type='search' 
                        placeholder='search friends'
                        onChange={ searchChange } 
                    />
                </div>
            );
        }
        ```

    3. 把從 SearchBox 得到的 input 值用來篩選 robots cards

        先在 fn 中用 setState 同步變更 searchfield 的值為 input 值
        再用 .filter() 從 robots 陣列中篩選出有包含 searchfield 值的 robots

        ```jsx
        // 做 search 的 fn
        onSearchChange(e) {
        	this.setState({
        	  searchfield: e.target.value
          })

          const filteredRobots = this.state.robots.filter(robot => {
        	  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })

          console.log(filteredRobots)
        }
        ```

        ⚠️ 上面的程式碼會出錯，因為 this 的關係 ⚠️

        `this` 的值是在**呼叫 function** 的當下決定的，所以上面 fn 中的 `this` 指的不是 App，
        而是觸發 onSearchChange fn 的 SearchBox 的 input，他並沒有 .state.robots 可以用

        📍 改成 arrow function 來寫 📍

        arrow function 比較特別，會看外層的 `this` 是什麼、arrow function 的 `this` 就是什麼，
        只有 arrow function 中的 `this` 是在**定義 function** 的時候就決定好的

        ```jsx
        // 改成 arrow fn
        onSearchChange = (e) => {
        	this.setState({
        	  searchfield: e.target.value
          })

          const filteredRobots = this.state.robots.filter(robot => {
        	  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })

          console.log(filteredRobots)
        }
        ```

    4. 讓畫面顯示的 cards 是根據 input 值篩選後的

        ```jsx
        onSearchChange = (e) => {
        	this.setState({
        	  searchfield: e.target.value
          })
        }

        render() {
        	const filteredRobots = this.state.robots.filter(robot => {
        	  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })

        	return (
        		<div className='tc'>
        	    <h1>Imaginary Friends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <CardList robots={filteredRobots} />
            </div>
          )
        }
        ```

### 3. 資料串接遠端 API

原本的 robots 資料是從本地端內建資料取得，若想改為串接遠端的 API，
將 fetch 寫在 `componentDidMount()` 中

```jsx
constructor() {
	super()
  this.state = {
	  robots: [],
    searchfield: ''
  }
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response => response.json())
	  .then(users => this.setState({ robots: users }));
}
```

因為是從遠端撈取資料，若擔心撈資料較花時間，也可在 render 中新增顯示 loading 條件

```jsx
render() {
	const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})
	if (this.state.robots.length === 0) {
		return <h1>Loading</h1>
	} else {
		return (
			<div className='tc'>
      <h1 className='h1'>Imaginary Friends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
      </div>
    )
	}
}
```

### 4. 把 cards 做成可滑動區塊，讓 searchbox fix 在最上面

1. 做一個新的 component 來控制滑動（之後其他區塊便可重複利用）
2. 把 cards 包在此滑動 component 裏面

    ```jsx
    <div className='tc'>
    	<h1 className='h1'>Imaginary Friends</h1>
    	<SearchBox searchChange={this.onSearchChange}/>
    	<Scroll>
    		<CardList robots={filteredRobots} />
    	</Scroll>
    </div>
    ```

3. Scroll 要使用到包在他裡面的 CardList，這邊要用 `props.children`

    CardList 包在 Scroll 裡面，是 Scroll 的 child

    在 Scroll.js 裏：

    ```jsx
    import React from 'react';

    const Scroll = (props) => {
    	return (
    		<div>
    			{props.children}
    		</div>
    	)
    }

    export default Scroll;
    ```

4. 接下來只要在 Scroll 中直接加入 style 即可

    💡 style 後面有兩個 {} ，第一個 {} 表示裡面是 js，第二個 {} 表示裡面是 object

    ```jsx
    import React from 'react';

    const Scroll = (props) => {
        return (
            <div style={{ overflowY: 'scroll', border: '1px solid black', height: '700px' }}>
                {props.children}
            </div>
        )
    }

    export default Scroll;
    ```

### 5. 整理檔案

目前在 src 資料夾中有很多個檔案，可以統整放進兩個資料夾中：

containers — 最外層的 component（有設定 state 和那些生命週期 method）
components — pure component 

因為位置更動，所以 import 的資料位置也要修改

```jsx
// 「../components」 表示回到上一層，進到 components 資料夾中
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
```

### 6. 檢查 code 是否可以再更精簡

1. 重複寫到 `this.state`

    使用解構賦值 {} 精簡

    ```jsx
    render() {
    	const { robots, searchfield } = this.state;
    	const filteredRobots = ~~this.state.~~robots.filter(robot => {
    	  return robot.name.toLowerCase().includes(~~this.state.~~searchfield.toLowerCase());
      })
      if (~~this.state.~~robots.length === 0) {
    	  return <h1 className='tc'>Loading</h1>
      } else {
    	  return (
    	    <div className='tc'>
    	      <h1 className='h1'>Imaginary Friends</h1>
    	      <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
    	        <CardList robots={filteredRobots} />
            </Scroll>
         </div>
        )
    	}
    }
    ```

2. (robots.length === 0) 可改成 true false 寫法

    因為 true = 1，false = 0 所以原程式碼可改寫成

    ```jsx
    render() {
    	const { robots, searchfield } = this.state;
    	const filteredRobots = robots.filter(robot => {
    	  return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if (!robots.length) {
    	  return <h1 className='tc'>Loading</h1>
      } else {
    	  return (
    	    <div className='tc'>
    	      <h1 className='h1'>Imaginary Friends</h1>
    	      <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
    	        <CardList robots={filteredRobots} />
            </Scroll>
         </div>
        )
    	}
    }
    ```

3. 既然 if 的條件是判斷 true / false，可用三元運算符簡寫

    [[Js] 三元運算符 / 三元運算值](https://medium.com/@kyokyox2/js-%E4%B8%89%E5%85%83%E9%81%8B%E7%AE%97%E7%AC%A6-%E4%B8%89%E5%85%83%E9%81%8B%E7%AE%97%E5%80%BC-3987be9623a5)

    return 條件 ? 符合條件結果 : 不符合條件結果;

    ```jsx
    render() {
    	const { robots, searchfield } = this.state;
    	const filteredRobots = robots.filter(robot => {
    	  return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !robots.length ? 
    	<h1 className='tc'>Loading</h1> :
    	(
    		<div className='tc'>
    		  <h1 className='h1'>Imaginary Friends</h1>
    	    <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
    	      <CardList robots={filteredRobots} />
          </Scroll>
       </div>
      )
    }
    ```

### 7. 加上 error boundary（React 16 新推出）

[錯誤邊界 - React](https://zh-hant.reactjs.org/docs/error-boundaries.html)

錯誤邊界是一個 React component，可以捕捉任何在它的 child component tree 裡發生的 JavaScript 的錯誤，記錄那些錯誤，然後顯示在一個 fallback 的使用介面，
而非讓整個 component tree 崩壞。

錯誤邊界會在 render 的時候、在生命週期函式內、以及底下一整個 component tree 裡的 constructor 內捕捉錯誤。

一個 class component 如果定義了 `static getDerivedStateFromError()` 或 `componentDidCatch()` 其中一種（或兩種都有）生命週期，它就會變成錯誤邊界

1. 新增一個 ErrorBoundary 的 component
2. 在 ErrorBoundary 裡面初始化 state，並寫好若有 error 則 render 什麼東西
再用有錯誤的話會自動觸發的 method `componentDidCatch()` 來更新 state

    ```jsx
    import React, { Component } from 'react';

    class ErrorBoundary extends Component {
        constructor(props) {
            super(props)
            this.state = {
                hasError: false
            }
        }

        componentDidCatch(error, info) {
            this.setState({ hasError: true })
        }

        render() {
            if (this.state.hasError) {
                return <h1 className='tc'>Oooops Something went wrong.</h1>
            }
            return this.props.children
        }
    }

    export default ErrorBoundary;
    ```

# 設定 github page

[[Day 29 - 即時天氣] 寫網頁就是要炫耀啊，不然要幹麻？發布上 Github Pages 吧！ - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10228423)

按照上面文章的步驟，自己在 `npm install --save gh-pages` 這邊出現一堆 JSON 的 error

原來只是 package.json 裏面忘記正確加上逗號而已.....
