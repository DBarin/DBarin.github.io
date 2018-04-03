


function IsLeapYear() { 

    for (var i = 1900; i <= 2000; i++)  {

    if(i%4 == 0) 
    { 
            if(i%100 != 0) 
            { 
                    console.log (i); 
            } 

            else 
            {
                if(i%400 == 0)
                    {
                        console.log (i); 
                    }
                else {}
                
            } 
            
        
    }

    else
    {}

    
}

}