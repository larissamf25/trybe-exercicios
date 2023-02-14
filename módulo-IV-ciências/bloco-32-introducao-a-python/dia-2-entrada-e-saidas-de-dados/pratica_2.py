import random

word = random.choice(["word1", "word2", "word3"])
scrambled_word = "".join(random.sample(word, len(word)))

control = False
for idx in range(3):
    print(scrambled_word)
    guess = input("Digite seu palpite: ")
    if guess == word:
        control = True

if control:
    print("Você acertou a palavra!!")
else:
    print("Não foi dessa vez, a palavra correta seria ", word)
