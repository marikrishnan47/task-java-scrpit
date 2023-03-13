    myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    },
{
     studenName: "ricky",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "john",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "jerry",
     studenClass: 6,
     studenSection: "a"
    },{
     studenName: "henry",
     studenClass: 6,
     studenSection: "b"
    },{
     studenName: "stephen",
     studenClass: 6,
     studenSection: "a"
    }
]
var filter=myArr.filter((v1)=>{return v1.studenSection=='a'});
document.write(JSON.stringify(filter));
// filter------------------------------
     library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   },
   {
       title: 'Adventures of Tom Sawyer',
       author: 'Mark Twain',
       libraryID: 1345
   },
   {
       title: 'Adventures of Sherlock Holmes',
       author: 'Sir Arthur Conan Doyle',
       libraryID: 2245
   }
];
sor=library.sort((y,x)=>y.libraryID-x.libraryID);
document.write(JSON.stringify(sor));
//sort----------------------
    function hello(greeting, name) {
  return greeting + ' ' + name;
   }
function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
   }
const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
test1=Object.values(foo);
test2=Object.keys(foo);
document.write("variables:","howdy,foo","<br>");
document.write("object property names:","<br>",test2,"<br>");
pri=test1.filter((a)=>typeof(a)=="number"||typeof(a)=="string");
document.write("primitive values:","<br>",pri,"<br>")
document.write("objects shown:","<br>",JSON.stringify(foo),"<br>");
   
//.........................
   
        let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
document.write("old","<br>",JSON.stringify(obj),"<br>")
Object.seal(obj);
obj.bar[3].xyz = 606;
document.write("new","<br>",JSON.stringify(obj));