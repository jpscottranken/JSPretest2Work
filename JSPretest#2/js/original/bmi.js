const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
	const MINHEIGHT  =  12
    const MAXHEIGHT  =  96
    const MINWEIGHT  =   1
    const MAXWEIGHT  = 777
	const MINOPTIMAL =  18.5
	const MINOVER    =  25.0
	const MINOBESE   =  30.0
	const OORHEIGHT  = "Height Out Of Range!"
	const OORWEIGHT  = "Weight Out Of Range!"
    let  isValid     = true
    let  theStatus   = ""
    let  theResult   = ""

    const calculateTheBMI = () => {
        let height 	  = parseInt($("#height").value)
        let weight 	  = parseInt($("#weight").value)
		
        if  (isNaN(height) 			||
			(height < MINHEIGHT)	||
            (height > MAXHEIGHT))   {
            $("#status").value = OORHEIGHT
			return
        } 
		else
		{
		    $("#status").value = ""
		}
		
        if  (isNaN(weight) 			||
			(weight < MINWEIGHT)	||
            (weight > MAXWEIGHT))   {
            $("#status").value = OORWEIGHT
			return
        }
		else
		{
		    $("#status").value = ""
		}
		
        result = weight / (Math.pow(height, 2)) * 703
        result = parseFloat(result.toFixed(2))
        $("#result").value = result
        status = result
		setTheBMIStatus()
    }
	
    const setTheBMIStatus = () => {
		if (status < MINOPTIMAL) {
			status = "Underweight"
		}
		else if ((status >= MINOPTIMAL) && (status < MINOVER)) {
			status = "Optimal Weight"
		} 
		else if ((status >= MINOVER) && (status < MINOBESE)) {
			status = "Overweight"
		}
		else {
			status = "Obese"
		}
		
		$("#status").value = status
	}
	
    const clearAll = () => {
		weight = 0
		height = 0
		bmi    = 0.0
		status = ""
		$("#height").value = ""
        $("#weight").value = ""
        $("#result").value = ""
        $("#status").value = ""
		$("#height").focus()
	}
	
    $("#calculate").addEventListener("click", evt => {
		//	Call function to calculate the BMI 
        calculateTheBMI()
    }) //calculate on click

	$("#clearForm").addEventListener("click", evt => {
		clearAll()
	})
})