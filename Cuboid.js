import React from "react";
import {CSphere,TSphere,VSphere} from './App';
import './App.css';
function SphereDisp()
{
  return(
    <div className="sphere">
      <h3>SPHERE</h3>
      <p>The CSA of a Sphere is: </p>
      <CSphere />
      <p> The TSA of a Sphere is: </p>
      <TSphere />
      <p>The Volume of a Sphere is: </p>
      <VSphere />
    </div>
  )
}

function CCuboid()
{
  var length=10;
  var height=20;
  var breadth=30;
  var csacub=2*((length*breadth)+(breadth*height)+(length*height));
  return(csacub);  
}

function TCuboid()
{
  var length=10;
  var height=20;
  var breadth=30;
  var tsacub=2*height*(length+breadth);
  return(tsacub);
}

//Volume 

class VCuboid extends React.Component 
{
  render()
  {
    var length=10;
    var height=20;
    var breadth=30;
    var volcub=length*height*breadth;
    return(volcub);
  }
}
export {SphereDisp,CCuboid,TCuboid,VCuboid};