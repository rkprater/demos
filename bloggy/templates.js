var templates = {};

templates.post = [
  "<article data-index='<%= idx %>'>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<p>- <%= author %></p>",
  "<p><button class='deletePost'>Delete</button></p>",
  "<img src='<%= photo %>'>",
  "<form action=''>",
  "<input type='text' value='<%= title %>'>",

  "</article>"

].join("");


templates.sidebar = "<p><%= selftext %></p>";