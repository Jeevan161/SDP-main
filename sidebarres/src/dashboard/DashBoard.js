import React from 'react'
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import MotionHoc from "./../Pages/MotionHoc"
import './Dash.css'
function DashBoard() {
  return (
    <div className="ll">
    <div className="llGlass">
   
      <MainDash/>
 
    </div>
  </div>
  )
}
const DashBoards = MotionHoc(DashBoard);
export default DashBoards