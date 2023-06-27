import React,{useEffect,useState} from 'react'

const Covid = () => {

  const[data,setData]=useState([]);

    const getCovidData=async()=>{
        try{
            const res  = await fetch('https://data.covid19india.org/data.json');
            const actualData=   await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }

    }
useEffect(()=>{
    getCovidData();
},[]);

  return (
    <section>
      <center>
       <h1>covid tracker </h1>
<div class="flex">
  <div class="bg">
  <div class="card">
      <div class="container">
    <h4><span>total</span><br/><b>count</b></h4>
    <p>{data.recovered}</p>
  </div>
</div>
<br/><br/>


<div class="card">
      <div class="container">
    <h4><b>total confirmed</b></h4>
    <p>{data.confirmed}</p>
  </div>
</div>
<br/><br/>

      <div class="card">
      <div class="container">
    <h4><b>total Active cases </b></h4>
    <p>{data.active}</p>
  </div>
</div>
<br/><br/>

<div class="card">
      <div class="container">
    <h4><b>Country</b></h4>
    <p>INDIA</p>
  </div>
</div>
<br/><br/>


      <div class="card">
      <div class="container">
    <h4><b>Updated time </b></h4>
    <p>{data.lastupdatedtime}</p>
  </div>
</div>
<br/><br/>
  </div>
      


  
</div>

</center>

    
</section>
  )
}

export default Covid
