/* console.log("Hello world from Script.js");

var age;
var age = prompt("What is your age");

days = age * 365;
alert(age + " years is roughly " + days + " days");



var age2 = prompt("Your age: ")

if (age2 < 18)
{
    
    alert("Sorry you are not old enough");
}

else if (age2 < 21)
{
    
    alert("You can enter but you can't drink");

}

else {
    alert("Come in you can drink");
}



var age = prompt("Your age");
var age = parseInt();

if (age < 0)
    {
        alert("Go away!");
    }
else if (age=21)
    {
        alert("Happy 21s birthday!");
    }
else(!(age % 2 == 0)){
    
    alert("Your age is odd");
}

}


var nr = -10;
while (nr >= -10 && nr <= 19)
    {
        console.log("count is: " + nr)
        nr++;
    }


var count = 10;
while (count >= 10  && count <= 40)
    {
        if (count % 2 == 0)
    {
            
            console.log(count);
    }
        count++;
   
    }



var i = -10;
for(var i = -10; nr >= -10 && nr <= 19; i++);
{

    console.log(i);
   
}


function doSomething()

{
    console.log("Hello world from doSomething!");
}
 doSomething();
 doSomething();
 doSomething();
 doSomething();



function test(x) 
{
    console.log(x);
    return x * 2;
 
}

test(40);
*/

/*
function isEven(x)


{
 if(x % 2 == 0)
     {
         else {
            return false;
         }
     }
    var nr = prompt("Write a number: ");
    nr = parseInt(nr);
    
    if(isEven(nr))
{
    console.log("Num is even.");
}
    else {
        
        console.log("Num is odd.");
    }
}



function isEven(num){
    
    if (num % 2 === 0)
        {
            return true;
        }
    else {
        return false;
    }
}
var a = isEven(40);
console.log("40 eshte: " + a);
console.log("31 eshte: " + isEven);






var friends = ["charlie", "Sam", 25, 12];

friends[1];

friends.length



var person = {
    
    name: "Sam",
    age: 25,
    city: "LA"
};
    
console.log(person["name"])
console.log(person.name);



*/
$(document).ready(function(){
//    
//    Highcharts.chart('container', {
//fv
//    title: {
//        text: 'Solar Employment Growth by Sector, 20100-2016'
//    },
//
//    subtitle: {
//        text: 'Source: thesolarfoundation.com'
//    },
//
//    yAxis: {
//        title: {
//            text: 'Number of Employees'
//        }
//    },
//    legend: {
//        layout: 'vertical',
//        align: 'left',
//        verticalAlign: 'middle'
//    },
//
//    plotOptions: {
//        series: {
//            label: {
//                connectorAllowed: false
//            },
//            pointStart: 2010
//        }
//    },
//
//    series: [{
//        name: 'Installation',
//        data: [43934, 52503, 57177, 658, 97031, 119931, 137133, 154175]
//    }, {
//        name: 'Manufacturing',
//        data: [24916, 245064, 29742, 29851, 32490, 30282, 38121, 40434]
//    }, {
//        name: 'Sales & Distribution',
//        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    }, {
//        name: 'Project Development',
//        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//    }, {
//        name: 'Other',
//        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
//    }],
//
//    responsive: {
//        rules: [{
//            condition: {
//                maxWidth: 500
//            },
//            chartOptions: {
//                legend: {
//                    layout: 'horizontal',
//                    align: 'center',
//                    verticalAlign: 'bottom'
//                }
//            }
//        }]
//    }
//
//});
$('#trigger').click(function(){
    
   console.log("Hello you piece of cake");
    
    $('body').css("background-color","green");
    
});



//$('div').css("background-color", "purple");
//$('.container-fluid').css("background-color", "white");
});


$('.highlight-width').addClass('highlight-width');
$('.third-border').addClass('third-border');