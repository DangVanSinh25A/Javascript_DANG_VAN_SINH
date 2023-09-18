document.addEventListener('DOMContentLoaded', function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let form = document.getElementById('myForm');
    let selectedActivities = [];
    let totalAmount = 0;
    form.addEventListener('submit', function() {
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          selectedActivities.push(checkbox.value); 
        }
      });
      monny()
    });
    function monny(){
    let arrayItem = [[['swimming'],[500]],[['football'],[600]],[['dancing'],[200]],[['singer'],[1000]]]
    for(let i = 0; i < selectedActivities.length;i++){
        for(let j = 0; j <arrayItem.length;j++){
            if(selectedActivities[i] == arrayItem[j][0]){
                totalAmount +=parseInt(arrayItem[j][1]) 
            }
        }
    }
    console.log(totalAmount);
}

document.getElementById('myForm').addEventListener('submit', function() {
    let discount
    let selectedJob = document.querySelector('input[name="jod"]:checked');
    let job = selectedJob.value;
    switch(job){
        case 'Student':
            discount = totalAmount-(totalAmount*20)/100
            break
        case 'job':
            discount = totalAmount-(totalAmount*3)/100
            break
        case 'university':
            discount = totalAmount-(totalAmount*10)/100
            break
    }
   document.getElementById('demo').innerHTML="Tổng tiền học phí là : "+discount
  });
  });

  
  