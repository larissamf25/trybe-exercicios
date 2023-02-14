with open("pratica_1.txt") as pratica1:
    text = pratica1.read()
    for idx, char in enumerate(text):
        print(text[0:len(text) - idx])
