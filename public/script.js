function appendMakrdown(){
    document.getElementById('result').innerHTML = marked($("#md").val());
}
