import express from 'express';
import dft, {books, other} from './books'

const app = express();

console.log(books, other, dft);

app.listen(3000)