window.onload = function(){
    axios
    .get("https://cors-anywhere.herokuapp.com/https://15.164.129.24/pickit/api/article")
    .then(function(result){
        console.log("통신결과: ", result.data);
    });
}