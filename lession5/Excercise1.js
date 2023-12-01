let students = [
    {
        studentName: "Tan",
        score: 7,
        priority: 2
    },
    {
        studentName: "Son",
        score: 5,
        priority: 1
    },
    {
        studentName: "Truong",
        score: 8,
        priority: 9
    },
    {
        studentName: "Luong",
        score: 7,
        priority: 2
    },
    {
        studentName: "Ha",
        score: 6,
        priority: 3
    },
    {
        studentName: "Dung",
        score: 9,
        priority: 2
    },
    {
        studentName: "Minh",
        score: 7,
        priority: 1
    },
    {
        studentName: "Dieu",
        score: 8,
        priority: 3
    }];

let stus = students.sort(function (a, b) {
        return a.score - b.score || a.priority - b.priority;
})

let length = stus.length;
// for(k of stus){
//     console.log(k.studentName);
// }
console.log(`First prize: ${stus[length - 1].studentName} - Score: ${stus[length - 1].score}, Second prize: ${stus[length - 2].studentName} - Score: ${stus[length - 2].score}`);

