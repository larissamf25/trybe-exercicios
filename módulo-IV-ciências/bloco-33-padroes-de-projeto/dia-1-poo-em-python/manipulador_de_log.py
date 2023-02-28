from abc import abstractmethod


class manipulador_de_log:
    @classmethod
    @abstractmethod
    def log(cls, mensagem):
        raise NotImplementedError
