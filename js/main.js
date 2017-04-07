var br = "<br />";

// JS: Max and Min values //

document.write(Number.MAX_VALUE + br);
document.write(Number.MIN_VALUE + br);

// JS: Escaped characters //

var samp_str = "Here some escaped character \" \' \\ \t \n";
document.write(br + samp_str + br);

// JS: Combining strings, lenght of string, substring, charAt, indexOf //

var first_str = "First String ";
var second_str = "Second String";
var combined = first_str + second_str;

document.write(br + combined + br);
document.write("Lenght of string: " + combined.length + br);
document.write("Substring: " + combined.substring(13,20) + br);
document.write("Last character: " + combined.charAt(combined.length-2) + br);
document.write("Index of T is: " + combined.indexOf('g') + br);

// JS: Difference between str_var and num_var, adding and multiplication, Number //

var str_var = "13";
var num_var = 31;
var total = num_var + str_var;
var mult_total = num_var * str_var;

document.write(br + "13 + 31 = " + total + br);
document.write("13 * 31 = " + mult_total + br);

var total = num_var + Number(str_var);
document.write(br + "13 + 31 = " + total + br);

var num_var2 = String(num_var);
document.write(br);
document.write(num_var + num_var + br);
document.write(num_var + num_var2 + br);

// Float vars, parseInt, typeof //

var float_var = 3.14159265359;
var float_str = float_var.toFixed(5);
document.write(br + "Shortended PI: " + float_str + br);
document.write("Integer PI: " + parseInt(float_var) + br);
document.write("Datatype of float_var: " + typeof(float_var) + br);
document.write("Datatype of float_str: " + typeof(float_str) + br);

// Boolean vars //

bool_var = Boolean(134);
document.write(br + "Boolean of 134 is: "+ bool_var + br);

// Other compare/comparison methods //

var rand_num1 = 123;
var rand_num2 = 378;

document.write(br + "Is 123 > 378? "+ (rand_num1 > rand_num2) + br);
document.write("Is 123 >= 378? " + (rand_num1 >= rand_num2) + br);
document.write("Is 123 < 378? " + (rand_num1 < rand_num2) + br);
document.write("Is 123 <= 378? " + (rand_num1 <= rand_num2) + br);
document.write("Is 123 == 378? " + (rand_num1 == rand_num2) + br);
document.write("Is 123 != 378? " + (rand_num1 != rand_num2) + br);

document.write(br + "Is 123 < 378 and 123 != 378? " + ((rand_num1 < rand_num2) && (rand_num1 != rand_num2)) + br);
document.write("Is 123 > 378 or 123 != 378? " + ((rand_num1 > rand_num2) || (rand_num1 != rand_num2)) + br);
document.write("Is 123 < 378? " + !(rand_num1 < rand_num2) + br);
