from pratica_2 import encrypt_message_to_number
import pytest


def test_encrypt_message_to_number_correct_result():
    assert encrypt_message_to_number('1-HOME-SWEET-HOM') == '1-4663-79338-466'


def test_encrypt_message_to_number_too_log():
    with pytest.raises(ValueError, match="Expression with invalid length"):
        encrypt_message_to_number('zerxjnokbhuvcxtrzexzewrxjnojibvy')


def test_encrypt_message_to_number_with_invalid_char_input():
    with pytest.raises(ValueError, match="Invalid character"):
        encrypt_message_to_number('%$#@')
