const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

const delay = (maxMilliseconds = 1000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback, time) => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     console.log(callback(user));
//   }, delay(time));
// };

// getUser(userFullName);
// getUser(userNationality);

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      callback(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);


function spinWords(string){
  let words = string.split(' ');
  let newString = '';
  words.forEach((word, indexx) => {
    if (indexx !== 0) newString += ' ';
    if (word.length < 5) {
      newString += word;
    } else { 
      for (let index = word.length; index >= 0; index -= 1) {
      newString += word.charAt(index);
      }
    };
  });
  return newString;
}

console.log(spinWords('Larissa aqui'));