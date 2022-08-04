var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    var res=result.map((ele)=>ele.name);
    console.log(res);

    var res1=result.map((ele)=>ele.region);
    console.log(res1);

    var res2=result.map((ele)=>ele.subregion);
    console.log(res2);

    var res3=result.map((ele)=>ele.population);
    console.log(res3);
}