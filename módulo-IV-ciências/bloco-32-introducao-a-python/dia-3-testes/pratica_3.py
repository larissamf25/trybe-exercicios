def verify_email(email):
    user, complement = email.split('@')
    website, extension = complement.split('.')
    if (not user.isalnum()) and ('-' not in user) and ('_' not in user):
        print(user.isdigit())
        raise ValueError('User in wrong format')
    if not user[0].isalpha():
        raise ValueError('User first letter wrong')
    elif not website.isalnum():
        raise ValueError('Website in wrong format')
    elif len(extension) > 3:
        raise ValueError('Extension too long')
    else:
        return 'OK'


# print(verify_email('larissa@gmail.com'))
