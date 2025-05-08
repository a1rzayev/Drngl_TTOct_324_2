# создаём словарь машин(номера - ключи и модели - значения)
cars_dictionary = {"10ZH585" : "Kia Sorento", "90ML187": "Merc E-class"}
print(cars_dictionary)

plate_code = "90ML187" #указываем номер машины
print("Car with plate", plate_code, "is:", cars_dictionary[plate_code]) #получаем машину по номеру

cars_dictionary["77GH077"] = "RR Vogue"
print(cars_dictionary)
#когда во второй раз указываем один и тот же номер, меняется просто значение
cars_dictionary["77GH077"] = "Toyota Fortuner"
print(cars_dictionary)

moto_dictionary = {"90H900" : "Honda Z1200", "10H100" : "Kawazaki ZXC"}

#выводим словарь машин и мотоциклов отдельно
print("Cars:", cars_dictionary)
print("Motos:", moto_dictionary)

#создаём словарь для общего хранения
cars_motos_dictionary = {}
cars_motos_dictionary.update(cars_dictionary) #добавляем словарь машин в общий
cars_motos_dictionary.update(moto_dictionary) #добавляем словарь мотоциклов в общий

print("Cars and motos:", cars_motos_dictionary) #выводим общий словарь

# когда у нас одинаковые значения, но много ключей, добавляем элементы в словарь так
people_dict = dict.fromkeys(("Rafael", "Onur", "Maqa"), 14)
print("students age: ", people_dict)

# если не указываем значение, то будет ничего(None) как значение
people_dict2 = dict.fromkeys(("Rafael", "Onur", "Maqa"))
print("students age: ", people_dict2)

print("Keys of people_dict:", people_dict.keys()) #ключи словаря people_dict
print("Values of people_dict:", people_dict.values()) #значения словаря people_dict
print("Items of people_dict:", people_dict.items()) #элементы словаря people_dict

#удаляем элемент по ключу
people_dict.pop("Maqa")
print("students age: ", people_dict)