import random #добавляем модуль random

# cоздаем список проблем/преступлений
problem_list = ["Living Giant Tree", "Alien Flying Saucer",
                "Monster Spirit from the Parallel Universe",
                "Parasites That Capture", "Mutant Centipede",
                "Mad Godzilla", "Black Dragon", "Titanium"]

# рандомно выбираем элемент из списка
problem = problem_list[random.randint(0, len(problem_list) - 1)]

# выводим проблему 
print("Faced problem:", problem)

# создаём список героев и добавляем их
heroes_list = [input(), input(), input()]

# выводим уведомление с героями
print("This heroes:", heroes_list, "went to the mission")