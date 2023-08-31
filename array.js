const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sorting
function sortAscending(param) {
  let result = param.sort(function (a, b) {
    return a - b;
  });

  return result;
}

function sortDescending(param) {
  let result = param.sort(function (a, b) {
    return b - a;
  });

  return result;
}

const agesAscending = sortAscending(ages);

console.log(agesAscending);
console.log(sortDescending(ages));

//Median
const middleIndex = Math.floor(ages.length / 2);
let median;

if (middleIndex === 0) {
  median = (agesAscending[middleIndex - 1] + agesAscending[middleIndex]) / 2;
} else {
  median = agesAscending[middleIndex];
}

console.log(median);

//Average
const average = agesAscending.reduce(
  (akumulator, number) => akumulator + number
);

console.log(average / agesAscending.length);

//range

const maxAge = Math.max(...agesAscending);
const minAge = Math.min(...agesAscending);

const range = maxAge - minAge;
console.log(maxAge);
console.log(minAge);
console.log(range);

// Compare value
const minAverage = Math.abs(minAge - average);
const maxAverage = Math.abs(maxAge - average);
console.log(minAverage);
console.log(maxAverage);

// Countries
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const firstTen = countries.slice(0, 10);
console.log(firstTen);

const middleIndexCountries = Math.floor(countries.length / 2);
let medianCountries;

if (middleIndexCountries === 0) {
  medianCountries =
    (countries[middleIndexCountries - 1] + countries[middleIndexCountries]) / 2;
} else {
  medianCountries = countries[middleIndexCountries];
}

console.log(medianCountries);

const firstHalf = countries.slice(0, middleIndexCountries);
const secondHalf = countries.slice(middleIndexCountries);

if (countries.length % 2 !== 0) {
  const additionalCountry = secondHalf.shift();
  firstHalf.push(additionalCountry);
}

console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);
