class Televisao:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, new_canal):
        if not (1 <= new_canal <= 99):
            raise ValueError('Canal indisponível')
        self.__canal = new_canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
