document.write(Number.MAX_VALUE+"<br />");
document.write(Number.MIN_VALUE+"<br />");

var samp_str = "Here some escaped character \" \' \\ \t \n";
document.write(samp_str + "<br />");

var first_str = "First String ";
var second_str = "Second String";

var combined = first_str + second_str;

document.write(combined + "<br />");
document.write("Lehght of string: " + combined.length + "<br />");
document.write("Substring: " + combined.substring(13,20) + "<br />");
document.write("Last character: " + combined.charAt(combined.length-2) + "<br />");
document.write("Index of T is: " + combined.indexOf('g') + "<br />");

var str_var = "13";
var num_var = 31;

var total = num_var + str_var;
var mult_total = num_var * str_var;

document.write("13 + 31 = " + total + "<br />");
document.write("13 * 31 = " + mult_total + "<br />");
