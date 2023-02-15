def encrypt_message_to_number(message):
    arr = list(message)
    if not 1 < len(arr) <= 30:
        raise ValueError("Expression with invalid length")
    code = ''
    for char in arr:
        if ord(char) in [45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]:
            code = f'{code}{char}'
        elif 65 <= ord(char) <= 90:
            idx = ord(char) - 65
            n = idx // 3 + 2
            if n > 9:
                n = 9
            elif char == 'S':
                n = 7
            elif char == 'V':
                n = 8
            code = f'{code}{n}'
        else:
            raise ValueError("Invalid character")
    return code


print(encrypt_message_to_number('MYLOVE'))
