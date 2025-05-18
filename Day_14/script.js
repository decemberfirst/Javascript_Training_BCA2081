// --------------SWITCH CASE---------------------
// EXACTLY SAME AS IF ELSE IF
// ONLY SYNTACTIC SUGAR (ANOTHER SYNTAX FOR IF ELSE)

let caseTOMatch = 'other';

switch (caseTOMatch) {
  case 'rohan': // same  as if(caseToMatch == "rohan")
    console.log('Case for rohan matched');
    break;
  case 'other': // same  as if(caseToMatch == "other")
    console.log('Case for other matched');
    break;
  case 'shyam': // same  as if(caseToMatch == "shyam")
    console.log('Shyam case matched');
    break;
  default:
    console.log('None of the case matched');
}

// input two number
// input symbol
// match symbol +, -, *, /, %
// peform actions accordingly
// use default case too
