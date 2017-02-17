var a=10;                      //1 задача - вариант с 3
    b=20;
    c=30;

if (c>b && c>a) {
	console.log (c*100);
}
if (b>a && b<c) {
	console.log (b*10);
}

if (a<b && a<c) {
	console.log (a);
}

var x=5                      //1задача - вариант с 4 
    y=10
    z=15
    k=20
if (k>z && k>y && k>x) {
	console.log (k*1000);
}
if (z>y && z>x && z<k) {
	console.log (z*100);
}
if (y>x && y<z && y<k) {
	console.log (y*10)
}
if (x<y && x<z && x<k) {
	console.log(x);
}

var s=10;                    //2 задача, 1 вариант
    d=20;
var w;
/*w=s+d;
console.log(w);
s=w-s;
console.log(s);
d=w-s;
console.log(d);*/

// w=d;                       //2 задача, 2 вариант
// d=s;
// s=w;
// console.log(s);
// console.log(d);

var f=10;                    //2 задача, без 3-й переменной
    h=20;
h=(f+h)-h;
f=f+h;

console.log(f);
console.log(h);



/*var arr=[];                     //3 задача, 1 спобоб через while
var i=0;
while (i<30) {
   function rand(min, max) {
	  return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
   }

   var num = rand(0, 100);
 arr.push(num);
 i++;
}
console.log(arr);*/

/*var index=25;                       // 4 задача, ломала голову, по-разному- ничего не получилось((
for (i=0; i<arr.length; i++) {
    if (arr[i]=index) {
    	console.log(i); 	
    } else {
    console.log(index=-1);	
    }
    break;
}*/

function rand(min, max) {
	  return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
   }



var arr2=[];                 //3 задача, через for 
arr2.length=30;
for (var i=0; i<arr2.length; i++) {
   var num = rand(0, 100);   
   arr2[i]=num;
}
console.log(arr2);


 var index=35;                       // 4 задача, 
 for (i=0; i<arr2.length; i++) {
   if (arr2[i]=index) {
    	console.log(i); 	
    } else {
    console.log("-1");	
    }
break;
}



  
 
  

