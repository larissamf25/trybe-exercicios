from pratica_4 import verify_email_list


def test_verify_email_list_correct_result():
    assert verify_email_list(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]) == ["nome@dominio.com", "outro@dominio.com"]


def test_verify_email_list_empty_list():
    assert verify_email_list([]) == []
