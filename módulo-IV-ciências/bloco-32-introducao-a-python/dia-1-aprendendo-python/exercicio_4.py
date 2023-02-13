def bigger(list):
    control = ''
    for word in list:
        if len(word) > len(control):
            control = word
    return control

print(bigger(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
