def paintAmount(area):
    volume = area / 3
    qnt = volume // 18 + 1
    price = qnt * 80
    return (qnt, price)

print(paintAmount(100))
