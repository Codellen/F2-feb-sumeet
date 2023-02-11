let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    var ans = arr.map(arr =>{
        if(arr.marks>50)
        {
            console.log(arr)
        }
    }
        )
     
   
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr => {
        if (arr.marks >50) {
          console.log(arr);
        }
      });
  }
  
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45});
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
  
    arr = arr.filter(arr => arr.marks>50)
    console.log(arr);
     
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    var arrays=[{ id: 3, name: "deepak", age: "21", marks: 65 },
    { id: 4, name: "karan", age: "22", marks: 98 }, { id: 5, name: "moon", age: "24", marks: 81 }]
    var ans = arr.concat(arrays);
    console.log(ans)
  }
