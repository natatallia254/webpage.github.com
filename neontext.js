function lighting(){
		    if (n==0){
			    for (m=0;m<neontext.length;m++)
				    liter[m].style.color=darkcolor;
			}
			liter[n].style.color=lightcolor;
			if (n<liter.length-1)
			    n++;
			else
			    {
			    n=0;
			   	clearInterval(blink);
				setTimeout("start()",1500);
			    }
        }

        function start(){
            if (document.all)
                blink=setInterval("lighting()",flashinterval);			
		}