# DOMination

In this assignment, we'll be writing functions that affect the DOM in various ways.

## Tasks

### Part One - Querying DOM Elements

**These functions don't need to `return` anything.**

1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!
2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.
3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.
4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`
6. Now use it to remove the first two items from that list. You'll need to call it twice!
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
8. Try using it to change the size of any text on the page.

### Part Two - DOM Elements as Function Parameters

**These functions will take in DOM elements as parameters. They also don't need to `return` anything.**

1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element in Javascript and pass it into your function.
3. Write a function that takes in an image element and modifies its height to be 30 pixels.
4. Let's use it. Query an image element and then pass it into the function.
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

### Part Three - Creating DOM Elements

**These functions will `return` new DOM elements.**

1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.
2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
