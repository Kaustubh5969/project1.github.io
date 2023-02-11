var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("lists").style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementById("lists").style.display="none";
        return a=1;
    }
}