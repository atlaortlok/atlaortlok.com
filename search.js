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
  