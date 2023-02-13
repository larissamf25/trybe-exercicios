def gasTotal(volume, fuel):
    if fuel == 'A':
        if volume <= 20:
            return volume * 1.9 * 0.97
        else:
            return volume * 1.9 * 0.95
    else:
        if volume <= 20:
            return volume * 2.5 * 0.96
        else:
            return volume * 2.5 * 0.94

print(gasTotal(5, 'A'))
