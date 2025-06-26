// let MyPersonList = [
//   {
//     name: 'abc',
//     address: 'nepal',
//     age: 33,
//   },
//   {
//     name: 'bcd',
//     address: 'pokhara',
//     age: 22,
//   },
// ]; // JSON -> JAVASCRIPT OBJECT NOTATION

// for (let i = 0; i < MyPersonList.length; i++) {
//   console.log(MyPersonList[i].name);
//   console.log(MyPersonList[i].address);
//   console.log(MyPersonList[i].age);

//   console.log('-------------------------');
// }

// let MyCollegeMemberList = [
//   {
//     // index: 0
//     id: 1,
//     memberName: 'Sanjeev Bhandari', // now use destructuring to print name, imageLink and isPrincipal only
//     imageLink: 'https://exampleimage.com',
//     isPrincipal: true,
//     isVicePrincipal: false,
//     subjectList: ['E-Commerce', 'Computer-Security'],
//     address: 'Manigram',
//     isCoordinator: false,
//   },
//   {
//     // index: 0
//     id: 1,
//     memberName: 'Sanjeev Bhandari', // now use destructuring to print name, imageLink and isPrincipal only
//     imageLink: 'https://exampleimage.com',
//     isPrincipal: true,
//     isVicePrincipal: false,
//     subjectList: ['E-Commerce', 'Computer-Security'],
//     address: 'Manigram',
//     isCoordinator: false,
//   },
// ];

// for (let i = 0; i < MyCollegeMemberList.length; i++) {
//   let { memberName, address, isCoordinator } = MyCollegeMemberList[i];
//   console.log(memberName);
//   console.log(address);
//   console.log(isCoordinator);
// }

// // TODO:
// let {
//   address: {
//     from: { permanent, temporary },
//   },
// } = {
//   address: {
//     from: {
//       permanent: 'nepal',
//       temporary: 'india', // TODO: now destructure permanent and temporary
//     },
//   },
// };

// let {
//   name: {
//     secondaryName: { first, second },
//   },
// } = {
//   name: {
//     primaryName: {
//       first: 'test',
//       second: 'test',
//     },

//     secondaryName: {
//       first: 'test',
//       second: 'test',
//     },
//   },
// };

let {
  animalType,
  animalName: {
    scientific: { name: scientificName },
    callable: { name: callableName }, // ALIAS (VVVVVVVVVVVVVVVVV. IMP)
  },
} = {
  animalType: 'MAMMAL',
  animalHabitat: 'HOUSE',
  animalName: {
    scientific: {
      name: 'HOMO_SAPIENS',
    },
    callable: {
      name: 'HUMAN', // DESTRUCTURE animalType, animalName-> scientific name, callable name
    },
  },
};

console.log(callableName);
console.log(scientificName);

// --------------------------------------------------------------------------------

let MemberList = {
  memberId: 'A100',
  memberRole: 'ADMIN',
  memberDetails: {
    memberPersonalDetails: {
      firstName: 'RAM',
      lastName: 'NEUPANE',
      from: 'BUTWAL',
      isMarried: true,
    },
    memberFamilyDetails: { // TODO: PRINT memberRole, memberFirstName, first children name and ,first children address name
    infantsDetails: {
        hasInfants: true,
        numberOfInfants: 2,
        firstChildren: {
          name: 'HARI',
          address: {
            name: 'BUTWAL',
          },
        },
      },
    },
  },
};
