// search.js
const documents = [
    { title: "Home", content: "Welcome to my website.", url: "index.html" },
    { title: "Simple cat", url: "tutorial1.html" },
  ];
  
  const idx = lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('content');
  
    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });
  
  // Export the index for use in other scripts
  window.idx = idx;
  // Add this to search.js
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value;
    const results = idx.search(query);
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    if (results.length > 0) {
      results.forEach(function (result) {
        const ref = result.ref;
        const doc = documents.find(function (doc) { return doc.url === ref; });
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<a href="${doc.url}">${doc.title}</a><p>${doc.content}</p>`;
        resultsContainer.appendChild(resultElement);
      });
    } else {
      resultsContainer.innerHTML = 'No results found.';
    }
  });
  