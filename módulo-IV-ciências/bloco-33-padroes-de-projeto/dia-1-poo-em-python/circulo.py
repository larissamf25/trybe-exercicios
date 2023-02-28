import numpy as np
import figura_geometrica


class circulo(figura_geometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return self.raio * self.raio * np.pi()

    def perimetro(self):
        return 2 * self.raio * np.pi()
