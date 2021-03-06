// Making a Video Player in jQuery
// In this exercise, you will use jQuery instead of the DOM API to create the same list of links you made in Exercise 1.
//
// Start with your own solution from Exercise 1.
//
// First, download the jQuery library from jquery.com and save it into the same directory as your exercise files. Then, add a <script> tag to the page which loads in the jQuery library you just downloaded. The script tag will look something like this:
//   <script type="text/javascript" src="PUT THE FILENAME HERE"></script>
// Next, replace the existing code with jQuery - any DOM manipulation can be done with jQuery instead. If you're not sure how to do something with jQuery, google for "X with jQuery" and you will likely find the jQuery docs or StackOverflow questions.
//
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

// const links = document.querySelectorAll('li a');
//
//
// for (var i = 0; i < links.length; i++) {
//   const link = links[i];
//   const href = link.getAttribute('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//
//   const image = document.createElement('img'); // detached DOM node
//   image.setAttribute('src', thumbnailURL);
//   link.appendChild(image);
//   console.log(image);
// }

// const links = $('li a');
// for (var i = 0; i < $links.length; i++) {
//    const link = $links[i];
//     const  $link = $links[i];
//     const href = $link.attr('href');
//     const thumbnailURL = youtube.generateThumbnailUrl(href);
//     const $image = $('<img>');
//     $image.attr('src', thumbnailURL);
//     $link.append($image);}


$('li a').each(function() {
  $(this).prepend(
    $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
  );
});