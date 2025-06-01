let MyPersonList = [
  {
    name: 'abc',
    address: 'nepal',
    age: 33,
  },
  {
    name: 'bcd',
    address: 'pokhara',
    age: 22,
  },
]; // JSON -> JAVASCRIPT OBJECT NOTATION

for (let i = 0; i < MyPersonList.length; i++) {
  console.log(MyPersonList[i].name);
  console.log(MyPersonList[i].address);
  console.log(MyPersonList[i].age);

  console.log('-------------------------');
}

let MyCollegeMemberList = [
  {
    // index: 0
    id: 1,
    memberName: 'Sanjeev Bhandari', // now use destructuring to print name, imageLink and isPrincipal only
    imageLink: 'https://exampleimage.com',
    isPrincipal: true,
    isVicePrincipal: false,
    subjectList: ['E-Commerce', 'Computer-Security'],
    address: 'Manigram',
    isCoordinator: false,
  },
  {
    // index: 0
    id: 1,
    memberName: 'Sanjeev Bhandari', // now use destructuring to print name, imageLink and isPrincipal only
    imageLink: 'https://exampleimage.com',
    isPrincipal: true,
    isVicePrincipal: false,
    subjectList: ['E-Commerce', 'Computer-Security'],
    address: 'Manigram',
    isCoordinator: false,
  },
];

for (let i = 0; i < MyCollegeMemberList.length; i++) {
  let { memberName, address, isCoordinator } = MyCollegeMemberList[i];
  console.log(memberName);
  console.log(address);
  console.log(isCoordinator);
}

// TODO:
let nestedObject = {
  address: {
    from: {
      permanent: 'nepal',
      temporary: 'india', // TODO: now destructure permanent and temporary
    },
  },
};
