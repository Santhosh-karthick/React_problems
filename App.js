import React from "react";
import './App.css';
function CSphere()
{
  var radius=7;
  var csasph=4*3.14*radius*radius;
  return (csasph); 
}

//TSA 
function TSphere()
{
  var radius=7;
  var tsasph=4*3.14*radius*radius;
  return (tsasph); 
}

//Volume 
class VSphere extends React.Component 
{
  render()
  {
    var radius=7;
    var volsph=(4/3)*radius*radius*radius;
    return(volsph);
  }
}
export {CSphere,TSphere,VSphere};