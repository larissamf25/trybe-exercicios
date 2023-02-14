import random
import json

with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]
    pokemon = random.choice(pokemons)

    guess = ""
    control = 1
    while guess != pokemon["name"]:
        guess = input("Digite seu palpite: ")
        if guess != pokemon["name"]:
            print(pokemon["name"][0:control])
            control += 1

    print("Você acertou o pokemon!")
