let textbox=document.getElementById("textbox");

textbox.addEventListener('input',function()
{
    var text=this.value;
    let char= text.length;
    document.getElementById("char").innerHTML=char;

    text=text.trim();//remove first and starting spacecs.

    let words=text.split(" ");//create words.
    console.log(words);
    
    //words counted space this problem solve using:
    let cleanlist=words.filter(function(ele){
    
        return ele!="" ;
  
      });
      console.log(cleanlist);
    document.getElementById("word").innerHTML=cleanlist.length ;


    

});