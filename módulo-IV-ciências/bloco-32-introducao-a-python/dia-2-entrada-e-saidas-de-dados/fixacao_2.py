string = input("Digite os números separados por espaço" + '\n')
numbers = string.split(" ")
soma = 0
for n in numbers:
    if not n.isdigit():
        print("Número inválido")
        break
    else:
        soma += int(n)
print(soma)
