recu = []

with open("students.txt") as students:
    for student in students:
        grade = student.split(' ')
        if int(grade[1]) < 6:
            recu.append(grade[0])

with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recu)
    recuStudentsFile.writelines(recu)
