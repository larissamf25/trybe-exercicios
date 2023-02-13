def average(*numbers):
    sum = 0
    for numb in numbers:
        sum += numb
    return sum / len(numbers)

print(average(1, 2, 3, 4, 5))
