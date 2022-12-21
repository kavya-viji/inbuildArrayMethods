//copywithin,entries,flatMap,forEach,from,group,groupToMap,keys,lastIndexOf,valueOf,toString
//at - returns the item at that index
var x = ["aee","bee","cee","dee","eee"];
var y = x.at(-4) //4
console.log("at : " +y);

//concat - merge two or more arrays
var x = [1,2,3];
var y = [4,5,6];
var z = ['a','b','c'];
var m = x.concat(y);
var n = x.concat(y,z);
console.log("concat : " +m);
console.log("concat : " +n);

//every - it will return true only if the condition satisfy
let age = [23,45,78,13,29]; 
var x = age.every(function(value)
{
	return value>=10
});
console.log("every : " +x);

//fill - it fills specifiefd element in a array with a value
var x = ['sa','re','ga','ma','pa'] //value,start,end
//var y = x.fill("dd")
var z = x.fill("dd",2,4)
//console.log("fill :" +y);
console.log("fill : " +z);

//filter - it will check the array and it will give what we wanted, length will be changed
let a = [23,45,78,13,29];
var x = a.filter(function(value)
{
	return value>=25
});
console.log("filter : "+x);

//find - return the value of first element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let even = num.find(function(value)
{
	return value%2==0
});
console.log("find : "+even)

//findIndex - return the index value of first element that passes the test
var num = [11,17,12,3,4,5,6,7,8,9];
let e = num.findIndex(function(value)
{
	return value %2==0
});
console.log("findIndex : "+e)

//findLast - return the value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,38,9];
let no = num.findLast(function(value)
{
	return value%2==0
});
console.log("findLastno : "+no)

//findLastIndex - return the index value of last element that passes the test
var num = [11,17,22,13,54,15,66,27,39,9];
let s = num.findLastIndex(function(value)
{
	return value%2==0
});
console.log("findLastIndex : " +s)

//flat - to reduce the nesting of an array
var d = [1,2,[3,4,[5,6,7,[8,9]]]];
var q = d.flat(Infinity) //flat(),flat(2),flat(Infinity) default 1
console.log(q);

//forEach
var routine = ["wake","eat","sleep"]
routine.forEach(function(value,index)
{
console.log(index,value)
})

//includes - it return true if an array contain specified element else return false
var t = ["aee","bee","cee","dee","eee"]; //value,start
var r = t.includes("cee")
var d = t.includes("bee",2)
console.log("includes : "+r);
console.log("includes : "+d);

//indexOf - returns the position of a specified value in an array.
var o = ['cat','dog','goat','lion','tiger','dog']; //item,start
var p = o.indexOf("dog");
var j = o.indexOf("dog",2);
console.log("indexOf : "+p);
console.log("indexOf : "+j);

//isArray - returns true if a datatype is an array, otherwise false
var l = [11,17,22,13,54,15,66,27,39,9];
var ll = "kavya"
var b = Array.isArray(l)
var be = Array.isArray(ll)
console.log("isArray : "+b);
console.log("isArray : "+be);

//join - returns an array as a string. //seperator is optional
var b = ['cat','dog','goat','lion','tiger'];
var l = b.join();
var v = b.join(" and "); //-
console.log("join : "+l);
console.log("join : "+v);
 
//map - new array from calling a function for every array element. 
var k = [1,2,3,4,5,6,7];
var h = k.map(function(value)
{
	return value*5;
});
console.log("map : "+h);

//push - add one or more element at the end of the array and return length
var m = [1,2,3,4,5,8];
var u = m.push(9); // m.push(9)
console.log("push : "+u);  // console.log(m)

//pop - remove the last element frm array and return the removed element
var zz = [1,2,3,4,5,8];
var uu = zz.pop(); 
console.log("pop : "+uu); 

//shift - method removes the first item of an array and return the removed element
var aa = ["cat","goat","zebra","donkey","buffaloo"];
var bb = aa.shift()
console.log("shift : "+bb)

//unshift - add one or more element at the begining of the array and return length
var ae = ["cat","goat","zebra","donkey","buffaloo"];
be = ae.unshift("camel")
console.log("unshift : "+be)//console.log(ae)

//reduce  
var salary = [9000,5234,14456,6576,9876];
var total = salary.reduce(function(previousVal,currentVal)
{
	return previousVal+currentVal;
	
})
console.log("reduce : "+total)

//reduceRight
var salaryy = [9700,5234,14456,6576,9879];
var totall = salaryy.reduceRight(function(previousVal,currentVal)
{
	return previousVal+currentVal;
})
console.log("reduceRight : "+totall)

//reverse - it reverse the order of the element of an array
var gg = [66,45,93,78,34];
var hh = gg.reverse()
console.log("reverse : "+hh);

//slice - return selected element in an array as a new array
var pp = ['cat','dog','goat','lion','tiger']; //start,end
var tt = pp.slice(2)
var dd = pp.slice(1,4)
console.log("slice : "+tt);
console.log("slice : "+dd);

//splice - adds and/or removes array elements. return removed item
var jkj = ["carrot","tomato","beetroot","raddish","onion"]; //index,howmany,item1...itemn
var kjk =  jkj.splice(4,1,"brinjal")
console.log("splice : "+kjk)

var jj = ["car","tom","beet","rad","oni"]; //index,howmany,item1...itemn
var kk =  jj.splice(5,0,"brinjal")
console.log(kk)

var jjj = ["carrot","tomato","beetroot","raddish","onion","beans"]; //index,howmany,item1...itemn
var kkk =  jjj.splice(5,0,"brinjal")
console.log(kkk)

var kl = ["carrot","tomato","beetroot","raddish","onion"];
lk = kl.splice(2,2)
console.log("splice : "+lk)

//sort - sorts the elements of an array.
var rr = ['crow','piegion','duck','parrot','dove'];
var uu = rr.sort()
console.log("sort : "+uu);

//some - atleast one element satisfy the condition it will return true
let ax = [23,45,78,13,29];
var xa = ax.some(function(value)
{
	return value>=25
});
console.log("some : "+xa);










// //copywithin - copies part of an array to another location in the same array
// var xxx = ['a','b','c','d','e','f','g']; //target,start,end
// var yyy = x.copyWithin(2);
// var zzz = x.copyWithin(1,5)
// console.log(yyy);
// console.log(zzz);

// var a = ["carrot","tomato","beetroot","raddish","onion"];
// a.splice(5,2,"brinjal","capsicum")
// alert (a)

// var a = ["carrot","tomato","beetroot","raddish","onion"];
//b = a.splice(5,2,"brinjal","capsicum")
//alert (b)

//var a = ["carrot","tomato","beetroot","raddish","onion"];
//a.splice(2,2)
//alert (a)

//var a = ["carrot","tomato","beetroot","raddish","onion"];
//b = a.splice(2,2)
//alert (b)

 //var a = ["carrot","tomato","beetroot","raddish","onion"];
// a.splice(3,2,"brinjal","capsicum")
 //alert (a)

// var a = ["carrot","tomato","beetroot","raddish","onion"];
// b = a.splice(3,2,"brinjal","capsicum")
// alert (b)

//---1---
// function mainFunction(getcallfunction)
// {
// console.log("Main function Executed");
// }
// function callBack()
// {
// console.log("callBack function Executed");
// }
//
// mainFunction(callBack);

//---2---
// function add(a,b)
// {
// 	console.log(a+b);
// }
//  add (10,20)

//---3---
// function add(a,b)
// {
// 	return a+b;
// }
// document.write(add (110,220));

//---4---
// let age = [23,45,78,13,29];
// var x=age.filter(function(value)
// {
// 	return value>=25
// });
// document.write(x);

//----5-filter----
// var num = [0,1,2,3,4,5,6,7,8,9];
// let even = num.filter(function(value)
// {
// 	return value %2==0
// });
//
// let odd = num.filter(function(value)
// {
// 	return value %2!==0
// });
// document.write("Even nos:",even)
// document.write("<br>")
// document.write("Odd nos:",odd);

//---6-find---
// var num = [11,17,2,3,4,5,6,7,8,9];
// let even = num.findIndex(function(value)
// {
// 	return value %2==0
// });
//
// let odd = num.findIndex(function(value)
// {
// 	return value %2!==0
// });
// document.write("Even nos:",even)
// document.write("<br>")
// document.write("Odd nos:",odd);

// ---7-map---
// var a = [1,2,3,4,5,6,7];
// var x = a.map(function(value)
// {
// 	return value*5;
// });
// document.write(x);









