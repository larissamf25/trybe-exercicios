from pratica_3 import verify_email
import pytest


def test_verify_email_correct_result():
    assert verify_email('larissa_@email.com') == 'OK'


def test_verify_email_with_incorrect_user():
    with pytest.raises(ValueError, match="User in wrong format"):
        verify_email('larissa*@email.com')


def test_verify_email_with_incorrect_first_char():
    with pytest.raises(ValueError, match="User first letter wrong"):
        verify_email('-arissa@email.com')


def test_verify_email_with_incorrect_website():
    with pytest.raises(ValueError, match="Website in wrong format"):
        verify_email('larissa@*email.com')


def test_verify_email_with_incorrect_extention():
    with pytest.raises(ValueError, match="Extension too long"):
        verify_email('larissa@email.comm')
