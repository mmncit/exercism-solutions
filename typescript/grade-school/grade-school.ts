export function createGradeSchool() {
    let studentRoster = new Map();
    return {
        studentRoster(){
            return studentRoster;
        },
        addStudent(name: string, grade: number) {
            let gradeStr = String(grade);
            if (studentRoster.has(gradeStr)) {
                let students = studentRoster.get(gradeStr);
                students.push(name);
                studentRoster.set(gradeStr, students.sort());
            } else {
                studentRoster.set(String(grade), [name]);
            }
        },
        studentsInGrade(grade: number){
           return studentRoster.get(String(grade)) || [];
        },
    };
}