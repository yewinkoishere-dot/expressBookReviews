
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Retrieve all books
function getAllBooks() {
  return axios.get(`${BASE_URL}/`)
    .then(response => {
      console.log('All books:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error retrieving all books:', error.message);
      throw error;
    });
}

// Retrieve a book by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(
      `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
    );
    console.log('Book by ISBN:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving book by ISBN:', error.message);
    throw error;
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log('Books by author:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving books by author:', error.message);
    throw error;
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log('Books by title:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving books by title:', error.message);
    throw error;
  }
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
