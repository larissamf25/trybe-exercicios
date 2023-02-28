import manipulador_de_log


class log_em_arquivo(manipulador_de_log):
    @classmethod
    def log(cls, mensagem):
        with open('log.txt', 'a') as arquivo:
            print(mensagem, file=arquivo)
