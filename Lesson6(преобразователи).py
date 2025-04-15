#вводим переменную
variable = input("Введите переменную: ")

#преобразовываем его в строку
str_variable = str(variable)
print("В виде строки:", str_variable * 5)

#преобразовываем его в число
int_variable = int(variable)
print("В виде чисел:", int_variable * 5)

#преобразовываем его в список
list_variable = list(variable)
print("В виде списка:", list_variable)

#преобразовываем его в bool
bool_variable = bool(variable)
print("В виде bool:", bool_variable)