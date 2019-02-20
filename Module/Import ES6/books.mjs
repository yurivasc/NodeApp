const books = () =>  console.log('books');

const other = () => console.log('other')

const dft = () => console.log('i am defualt')

export {books, other, dft as default};

//or
// export {books, other};
// export default dft; 

