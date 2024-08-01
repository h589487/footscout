<template>
   <div class="faq-container">
  <h2>Frequently Asked Questions</h2>
  <input type="text" placeholder="Search..." id="search-bar" class="search-bar" onkeyup="filterFAQs()" />

  <div class="faq-item">
    <h3 onclick="toggleFAQ(this)">What is FootScout</h3>
    <div class="faq-answer">
      <p>Vue.js is a progressive JavaScript framework for building user interfaces.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 onclick="toggleFAQ(this)">How do I register</h3>
    <div class="faq-answer">
      <p>You can install Vue using npm or by including a CDN link in your HTML file.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 onclick="toggleFAQ(this)">How to delete account</h3>
    <div class="faq-answer">
      <p>Components are reusable Vue instances with a name.</p>
    </div>
  </div>

  <!-- Legg til flere spørsmål og svar etter behov -->
</div>

  </template>

<style>
.faq-container {
  padding: 20px;
  background-color: #fff;
  max-width: 800px;
  margin: auto;
}

h2 {
  text-align: center;
  color: #003366;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.faq-item h3 {
  background-color: #003366;
  color: white;
  padding: 15px;
  margin: 0;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
}

.faq-item h3.active {
  background-color: #002244;
}

.faq-answer {
  display: none;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 0 0 5px 5px;
}

.faq-answer p {
  margin: 0;
}
</style>
