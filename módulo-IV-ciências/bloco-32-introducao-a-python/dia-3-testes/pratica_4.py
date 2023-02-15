from pratica_3 import verify_email


def verify_email_list(emails_list):
    correct_emails = []
    for email in emails_list:
        try:
            verify_email(email)
        except ValueError as exc:
            print(exc)
        else:
            correct_emails.append(email)
    return correct_emails
