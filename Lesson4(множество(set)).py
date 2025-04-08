students = set() #определяем пустое множество 
student_ages = {13} #определяем множество c элементом 0
print(students, type(students)) #выводим множество и тип данных
print(student_ages, type(student_ages)) #выводим множество и тип данных

students.add("Rafael") #добавляем элемент
students.add("Shamil") #добавляем элемент
print("Students:", students) #выводим множество студентов 

name1 = "Onur" #создаем переменную с именем
name2 = "Shamil" #создаем переменную с именем

print("Onur в классе:", name1 in students) #проверяем находится ли имя во множестве
print("Shamil в классе:", name2 in students) #проверяем находится ли имя во множестве

team1 = {"Sara", "Esma", "Sabina", "Nazrin"}
team2 = {"Maqa", "Rafael", "Dedushka", "Shamil"}
team3 = {"Maqa", "Asif muellim", "Nail"}

#если есть общие элементы False, если нет True
print("team2 и team3 не имеют общие элементы:", team2.isdisjoint(team3))
print("team1 и team2 не имеют общие элементы:", team1.isdisjoint(team2))

team12 = team1.union(team2) #объединение
team1.update(team2) #объединение

print("Объединение первой и второй команды:", team12)
print("Объединение первой и второй команды:", team1)

print("team12 содержится team1:", team12.issubset(team1)) #проверяем есть ли team12 в team1
print("team12 содержит team1:", team12.issuperset(team1)) #проверяем содержит ли team12 в team1


team12.discard("Rafael") #удаляет, если нет элемента, пропускает
print(team12)
team12.remove("Rafael") #удаляет, если нет элемента, выдает ошибку
print(team12)
