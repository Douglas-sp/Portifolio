// Live search and filtering of blog posts:

// Get the input field and filter element
var input = document.getElementById('search');
var filter = document.getElementById('filter');

// Add an event listener to the input field
input.addEventListener('input', function() {
  // Get the search query
  var query = this.value.toLowerCase();
  
  // Loop through all the blog posts
  for (var i = 0; i < filter.children.length; i++) {
    // Get the title of the blog post
    var title = filter.children[i].querySelector('h2').textContent.toLowerCase();
    
    // Check if the title contains the search query
    if (title.indexOf(query) > -1) {
      filter.children[i].style.display = '';
    } else {
      filter.children[i].style.display = 'none';
    }
  }
});



//Social sharing buttons to share blog posts on social media:

// Load the ShareThis library
window.onload = function() {
  var script = document.createElement('script');
  script.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=YOUR_PROPERTY&product=inline-share-buttons';//Replace YOUR_PROPERTY with your ShareThis property ID.
  document.head.appendChild(script);
}

//A commenting system for readers to leave comments on blog posts:

// Load the Disqus commenting platform
window.onload = function() {
  var script = document.createElement('script');
  script.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';
  script.setAttribute('data-timestamp', +new Date());
  (document.head || document.body).appendChild(script);
}
    //implement it
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
(function() {
var d = document, s = d.createElement('script');
s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
