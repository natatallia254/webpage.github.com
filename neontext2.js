var darkcolor="red";
var lightcolor="lightgreen";
var neontext='Заполните следующую форму и нажмите кнопку "Регистрация"';
var flashinterval=500;
var n=0;
if (document.all){
    document.write("<font color="+darkcolor+">");
	for (m=0;m<neontext.length;m++){
	    document.write("<span id="+'neontextliter'+">"+neontext.charAt(m)+"</span>"); 
		}
    document.write("</font>");
    var liter=document.all.neontextliter;
}
else document.write(neontext);
start();