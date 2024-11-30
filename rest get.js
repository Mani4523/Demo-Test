var request = new XMLHttpRequest();
  request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
  request.send();
  request.onload= function(){
   
    var data=JSON.parse(request.response);
    console.log(data);

    let total_pop= data.reduce((total,item) =>
    {
        return total + item.population;
    },0);

    console.log(total_pop);


 
    



  }