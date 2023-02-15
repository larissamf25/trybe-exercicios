from pratica_1 import fizzbuzz
import pytest


def test_fizzbuzz_return_only_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_return_fizz():
    assert fizzbuzz(3)[-1] == 'Fizz'


def test_fizzbuzz_return_buzz():
    assert fizzbuzz(5)[-1] == 'Buzz'


def test_fizzbuzz_return_correctly():
    'A função retorna a conversão correta na lista'
    assert fizzbuzz(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']


def test_fizzbuz_return_error_when_passing_not_number():
    'A função retorna um erro caso não seja passado um número'
    with pytest.raises(TypeError, match="'str' object cannot be interpreted as an integer"):
        fizzbuzz('a')
