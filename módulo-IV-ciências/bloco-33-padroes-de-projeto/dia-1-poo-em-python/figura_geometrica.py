from abc import abstractmethod


class figura_geomatrica:
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError
