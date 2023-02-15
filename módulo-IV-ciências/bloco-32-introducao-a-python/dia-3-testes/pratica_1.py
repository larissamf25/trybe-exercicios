def fizzbuzz(n):
    result = []
    for idx in range(n):
        if ((idx + 1) % 3 == 0) and ((idx + 1) % 5 == 0):
            result.append('FizzBuzz')
        elif (idx + 1) % 3 == 0:
            result.append('Fizz')
        elif (idx + 1) % 5 == 0:
            result.append('Buzz')
        else:
            result.append(idx + 1)
    return result


print(fizzbuzz(15))
