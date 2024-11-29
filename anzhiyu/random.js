var posts=["2024/04/06/backtracking/","2024/04/06/comments/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };