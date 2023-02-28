import numpy as np


class Estatistica:
    def media(self, numbers):
        soma = 0
        for n in numbers:
            soma += n
        return soma / len(numbers)

    def moda(self, numbers):
        quantity = {}
        for n in numbers:
            if n not in quantity.keys():
                quantity[n] = 1
            else:
                quantity[n] += 1
        index_max = np.argmax(list(quantity.values()))
        return list(quantity.keys())[index_max]

    def mediana(self, numbers):
        length = len(numbers)
        print((length + 1) / 2 - 1)
        if length % 2 == 1:
            return np.sort(numbers)[int((length + 1) / 2 - 1)]
        else:
            inferior = np.sort(numbers)[int(length / 2 - 1)]
            superior = np.sort(numbers)[int(length / 2)]
            return (inferior + superior) / 2


# teste = Estatistica()
# print(teste.moda([1, 2, 5, 5]))
