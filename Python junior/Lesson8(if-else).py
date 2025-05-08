# указываем переменную с возрастом
age = int(input("enter your age: "))

# проверяем можно ли ему водить транспорт
if(age >= 18):
    print("all vroom vroom")
elif(age >= 16):
    print("moto vroom vroom")
else:
    print("no vroom vroom")# проверяем можно ли ему водить транспорт


# разница в том, что если первое условие будет правильным,
# он все равно проверит второе
if(age >= 18):
    print("all vroom vroom")
if(age >= 16):
    print("moto vroom vroom")
else:
    print("no vroom vroom")
