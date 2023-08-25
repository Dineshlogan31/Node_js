//buffer is the global module so no need to import or require
//from method accept two paramaeter,first one is String value and second one is optional that is character encoding like utf-8
const buffer = new Buffer.from("Vishwas");

buffer.write("Aye");

//this method will return the string of the buffer value
//Ayehwas
console.log(buffer.toString());

//node js give hexa decimal format of the buffer value
//<Buffer 56 69 73 68 77 61 73>
console.log(buffer);

//this method will return the object that contains type and data array,this data array contains unicode of values
/*
{
  type: 'Buffer',
  data: [
     65, 121, 101,
    104, 119,  97,
    115
  ]
}
*/
console.log(buffer.toJSON());
