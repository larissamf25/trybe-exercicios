from datetime import datetime


class log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, new_manipulador):
        self.__manipuladores.add(new_manipulador)

    def info(self, mensagem):
        self.__log('INFO', mensagem)

    def alerta(self, mensagem):
        self.__log('ALERTA', mensagem)

    def erro(self, mensagem):
        self.__log('ERRO', mensagem)

    def debug(self, mensagem):
        self.__log('DEBUG', mensagem)

    def __log(self, nivel, mensagem):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, mensagem))

    def __formatar(self, nivel, mensagem):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {mensagem}"
