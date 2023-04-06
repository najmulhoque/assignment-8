import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import SideBar from './Components/SideBar/SideBar';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answers from './Components/Answers/Answers';

function App() {
  const [bookMark, setBookMark] = useState([])
  const [spendTime, setSpendTime] = useState([])
  const handleSpendTime = (item) => {
    setSpendTime([...spendTime, item])

  }
  const handleBookMark = (item) => {
    if (!bookMark.includes(item)) {
      setBookMark([...bookMark, item])
      toast.success('You added a blog!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else {
      toast.error('Oooops ,You already added that!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="main-cart col-md-9 card">
            <Cards handleSpendTime={handleSpendTime} handleBookMark={handleBookMark}></Cards>
          </div>
          <div className="sideCart  bg-secondary-subtle col-md-3 card">
            <SideBar spendTime={spendTime} data={bookMark}></SideBar>
          </div>
        </div>
      </div>
      <Answers></Answers>
    </div>
  )
}

export default App
