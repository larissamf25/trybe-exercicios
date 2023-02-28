import manipulador_de_log


class log_em_tela(manipulador_de_log):
    def log(cls, mensagem):
        print(mensagem)
