import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { postContext } from '../../store/postContext';
import { Firebasecontext } from '../../store/firebasecontext';
function View() {
  const [userDetails,setUserdetails] = useState()
  const {postDetails}= useContext(postContext)
  const {firebase} = useContext(Firebasecontext)
useEffect(()=>{
  const {userId} =postDetails
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc => {
      setUserdetails(doc.data())
    });
  })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price}</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        { userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userNe} </p>
          <p>{userDetails.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
