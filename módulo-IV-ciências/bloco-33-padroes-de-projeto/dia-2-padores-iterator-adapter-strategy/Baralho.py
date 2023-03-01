from abc import abstractmethod, ABC
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return CartaIterator(self._cartas, self.estrategia)


class CartaIterator(Iterator):
    def __init__(self, cartas, estrategia):
        self.cartas = cartas
        self.curr_card = 0
        self.estrategia = estrategia

    def __next__(self):
        try:
            carta = self.cartas[self.current_card]
        except IndexError:
            raise StopIteration
        else:
            self.current_card = self.estrategia.proxima_carta(self.curr_card)
            return carta


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class BaralhoInverso(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __iter__(self):
        return CartaIteratorInverso(self._cartas)


class CartaIteratorInverso(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.current_card = len(cartas) - 1

    def __next__(self):
        try:
            carta = self.cartas[self.current_card]
        except IndexError:
            raise StopIteration
        else:
            self.current_card -= 1
            return carta
