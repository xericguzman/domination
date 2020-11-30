# DOMination

Each of the below functions are a kind of function you might write in a larger app. Maybe you need a function that adds a todo to the top of your todo list, which is an unordered list in your interface. Or maybe it should add a photo to the end of your photo album, which is in a grid layout.

There are many advantages of organizing your interface-handling code this way: it keeps the mechanisms in one place for easy change later if (when!) you change your interface, and it means that as you write more features you don't have to constantly copy-paste or reinvent how displaying interface elements is done.

Putting this work in functions will also unlock the next step: telling the browser to run some interface-changing logic when the user interacts with your app. And that's the real heart of any graphical app: responding to your user's interaction.

But first: let's write those functions!


### A Note On Global Queries

You can use them!

Sometimes you'll query the same thing several times, and that thing doesn't change; a perfect example is a `ul`, like the Arguments list on this page. You won't be deleting or moving the list, so grabbing the result of querying it and saving it as a global variable is just fine. Then you don't have to query it every time you want to access it.

So when would you not want that? Well, if you want to get, say, the first `li` in a `ul`, that's a query that might return a different element each time you call it. If the results of your query might change, you'll want to run that query just before you use it, to make sure other logic hasn't changed it in the meantime.

Like so many things, practice will make perfect with this!


### Tasks

##### Part One - Side Effect Query Functions

These functions won't `return` anything, just make changes to the current DOM. They also won't take in any complex objects, just strings!

1. Now write a function that puts a line through the text of the first `<li>` in the Arguments `<ul>`. (Look up "first child" if you don't know what query to use, although there are other solutions). Since it always makes the same query, and changes it in the same way, this function requires no parameters!
2. Now call it! The first list item should get what's known as a "strikethrough" style.
3. Write a function that takes in a string representing an id and a string representing a url. The function should set the image with that ID to have that url as its image source.
4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
5. This one also doesn't require any parameters: write a function that always removes the last `<li>` from the Arguments `<ul>`  (try looking up "last child" and the `.remove` method). This is a bit tricky, but doable!
6. Now use it to remove the last two items from that list. You'll need to call it twice!


##### Part Two - Side Effect Node Element Functions

These functions will take in an HTML Element, complete with all the properties and sub-properties that come with it. They then manipulate that element according to the specifications below. They still don't `return` anything, so don't worry about that yet!

Whether you create them with `document.createElement` or query an already-existing element with `document.querySelector`, these particular functions will be working with elements. **While testing each of these, you'll need to pass them a Node Element.** Keep in mind as you write the function that its parameter WILL be an element, and when you go to use/test each one, be sure you're passing what that function expects: an HTML Node Element!

Okay, here are those challenges:

1. Write a function that takes in a node element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element and pass it into your function. (Note that a `<ul>` doesn't HAVE to have an `<li>` as its only children! Though ideally it should...) You'll know you've succeeded when the image shows up at the end of the Arguments list. Note that the image doesn't HAVE to have a `src` attribute... though it does if you want to see an actual IMAGE; otherwise the way to check would be to use your dev tools to check the DOM and see if the `img` tag got appended.
3. Write a function that takes in an image element and makes its height 30 pixels.
4. Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it into that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
8. Try using it to change the size of any text on the page.


##### Part Three - Pure Functions Returning Node Elements

These functions will all take in parameters and use them to make and return node elements. They don't do _anything_ to the DOM. So to test them, we'll have to use our earlier side-effect-having functions.

1. Write a function that takes in text and returns a new `<li>` with that text as its `innerText`.
2. Test it by calling it with some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
4. Test it by calling it with a header size and some text, placing the return value in a variable, and passing it to your append function from Step 1 of Part 2.
