abstract class Character {
  abstract talk(): void;
  abstract specialMode(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
      console.log('Este é o Melee');
  }
  specialMode(): void {
      console.log('Seu poder é de força');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
      console.log('Este é o LongRange');
  }
  specialMode(): void {
      console.log('Seu poder é de esticar');
  }
}

const presentation = (character: Character) => {
  character.talk();
  character.specialMode();
};

const char1 = new MeleeCharacter();
const char2 = new LongRangeCharacter()

presentation(char1);
presentation(char2);