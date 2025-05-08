# создаем переменные для позиций машины и человека
person_position = 0
car_position = 20

# с помощью цикла while проверяем дошел ли человечек до цели
while(person_position != car_position):
    person_position += 1 # добавляем к позиции человека 1
    print("person_position:", person_position)

# человечек дошел до цели
print("person reached car")





# указываем баланс пользователя
balance = 123

# указываем бесконечный цикл и будем проверять через break иcontinue
while(True):
    print("баланс:", balance) # выводим баланс
    balance_to_get = int(input("введите деньги которые хотите вывести:"))
    if(balance_to_get > balance): # если хотим получить больше денег чем на балансе
        print("у вас недостаточно денег на балансе")
        continue
    elif(balance_to_get < 0): # если меньше чем 0
        print("неправильный ввод")
        continue
    else:
        break

print("вы получили свои средства")





# бесконечный цикл
while(True):
    print("не опаздывайте на урок")