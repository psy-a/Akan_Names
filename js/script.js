function submitFormValues(){

    var day ="";
    var month = "";
    var year = "";
    var gender = "";
  
  
    var dayElement = document.getElementById("day");
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");
  
  
    day=dayElement.options[dayElement.selectedIndex].value;
  
    month = monthElement.options[monthElement.selectedIndex].value;
  
    year = yearElement.options[yearElement.selectedIndex].value;
  
    if(document.getElementById('male').checked){
      gender='male';
    }else if(document.getElementById('female').checked){
      gender='female';
    }else{
      gender='NONE';
    }
  
    showAkanName(day,month,year,gender);
  
  }
  
  