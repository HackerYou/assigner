"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Assigner = (function () {
  function Assigner(circle, students) {
    _classCallCheck(this, Assigner);

    this.circle = this.shuffle(circle);
    this.students = this.shuffle(students);
    this.groups = [];
    this.groupSize = Math.ceil(this.students.length / this.circle.length);
  }

  _prototypeProperties(Assigner, null, {
    shuffle: {
      value: function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      },
      writable: true,
      configurable: true
    },
    assignStudentsToTeachers: {
      value: function assignStudentsToTeachers() {
        var _this = this;
        var that = this;
        this.circle.forEach(function (teacher) {
          var group = {
            teacher: teacher,
            students: students.splice(0, _this.groupSize)
          };
          _this.groups.push(group); // scoped this!
        });
      },
      writable: true,
      configurable: true
    },
    display: {
      value: function display(template, circles) {
        var source = document.querySelector(template).innerHTML;
        var template = Handlebars.compile(source);
        var html = template({ groups: ass.groups });
        document.querySelector(circles).innerHTML = html;
      },
      writable: true,
      configurable: true
    },
    animate: {
      value: function animate(selector) {
        var items = document.querySelectorAll(selector);
        var i = 0;
        var animate = setInterval(function () {
          if (!items[i]) {
            clearInterval(animate);
            return;
          }
          items[i].className += " open";
          i++;
        }, 150);
      },
      writable: true,
      configurable: true
    }
  });

  return Assigner;
})();

var teachers = ["Uncle Drew", "Wes"];
var projects = ["Zap", "Trada", "Alica"];

var students = ["Abena Asomaning", "Alessandro Nahon", "Alex Janssen", "Drew Thompson", "Brad Carmichael", "Daniel Pierre", "Fiona Huang", "Greg McKenzie", "Hesam Jabbari Sahebari", "Jackie Evershed", "Jaymie Rosen", "Jennifer Taylor", "Joy Liu", "Kristen Kriens", "Ksenia Veriguina", "Leah Conway", "Lindsie Canton", "Mark Hill", "Maureen Holland", "Megan Mitchell", "Nick Spencer", "Noah Endale", "Ranjan Subbiah", "Rose Gauthier", "Trevor Stone", "Vlad Baranov", "William Stanton"];

// pass the assigner a circle array (teacher, project, classroom..) and an array of students
var ass = new Assigner(projects, students);
ass.assignStudentsToTeachers();
ass.display("#entry-template", ".groups");
ass.animate(".group li");
//# sourceMappingURL=all.js.map