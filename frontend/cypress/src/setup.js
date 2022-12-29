import './main.css'

export const createStore = () => {
    return /* store */
  }
  
  export const createRouter = () => {
    return /* router */
  }
  
  export const createApp = () => {
    return <App router={createRouter()} store={createStore()}></App>
  }