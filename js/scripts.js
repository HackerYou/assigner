class Assigner {

  constructor(circle, students) {
    this.circle = this.shuffle(circle);
    this.students = this.shuffle(students);
    this.groups = [];
    this.groupSize = Math.ceil(this.students.length / this.circle.length);
  }

  shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  assignStudentsToTeachers() {
    var that = this;
    this.circle.forEach((teacher)=> {

      var group = {
        teacher : teacher,
        students : students.splice(0,this.groupSize)
      }
      this.groups.push(group); // scoped this!
    });
  }

  display(template, circles) {
    var source   = document.querySelector(template).innerHTML;
    var template = Handlebars.compile(source)
    var html = template({groups : ass.groups});
    document.querySelector(circles).innerHTML = html;
  }

  animate(selector) {
    var items = document.querySelectorAll(selector);
    var i = 0;
    var animate = setInterval(function() {
      if(!items[i]) {
        clearInterval(animate);
        return;
      }
      items[i].className += " open";
      i++;
    }, 150);
  }

}

var teachers = ["Uncle Drew","Wes"];
var projects = ["Master","Luxen", "Solido", "Pioneer"];

var students = ["Allison Tarr", "Andrea Crofts", "Anna MacKenzie", "Hannah Ng", "Heather Banks", "Ian McIlwain", "Jenny Veens", "Jeremy North-Lewis", "Jordan Deutsch", "Jordyn Marcellus", "Karley MacDonald", "Kate Hillier", "Kevin LeClair", "Laura Naccarato", "Lisa Folkerson", "Lucas Lemonface", "Nate Ebel", "Omar Rahman", "Ross Butcher", "Sarah Lesh", "Steph Laba", "Trudy MacNabb", "Vivien Ilett", "Winston Chow", "Tammy Kim", "Sarah Hunter"];

// pass the assigner a circle array (teacher, project, classroom..) and an array of students
var ass = new Assigner(teachers, students);
ass.assignStudentsToTeachers();
ass.display("#entry-template",".groups");
ass.animate(".group li");
