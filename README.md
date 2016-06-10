# Lab 05 Pair Coding: Blog w/ "new article" page

By Geoff (driver) and Nathan (navigator)

### Assignment text:
Now that you have a blog where users can *read* articles, let's create an interface where writers can *write* new articles.

Since the blog is powered by the raw data file, we need a way to create articles and export the data. To keep things simple for this lab, the data won't actually be merged automatically into the article data file (i.e., `blogarticles.js`), but that data will simply be rendered as a JSON string in the web page, which an author could conceivably cut-n-paste into the data file, or email the JSON string to a web admin who'd do the same. In terms of the lab assignment, you should verify the JSON string that your code generates by doing this test:<br>
- Copy-and-paste the JSON string from your web app into the raw data file.
- Reload your web app and navigate to the main blog page.
- Verify that your new article shows up in the page, and is correct in terms of content and styling.

We'll use an HTML form to let authors create new posts in Markdown. We'll show the author a live preview of their article as they type, and even throw in syntax highlighting for blocks of code (imagine an article that is a tutorial on how to code -- the author may include many code snippets in her/his article).

The article creation page should be implemented as a special html page that is not linked from the main page, to protect your site from crazy online vandals-hackers-gone-rotten.

## Pair Coding
You can work as collaborators on a repo, or work on a forked repo.
1. With your partner, discuss the starter code and analyze it for at least 30 minutes. Be thorough enough that you have a clear understanding of what it does.
- Look for `TODO` items in the starter code and start implementing them. Swtich roles every time you complete one or two `TODO` items.
- Submit your final PR link on Canvas.

## User Stories: MVP
- As an author, I want a secret URL (`new.html`) where I can write articles, so that blog visitors won't be able to create their own posts.
- As an author, I want a form fields for all the article properties, so that I can write what appears in each part of my article.
- As an author, I want to be able to use Markdown, so that I can easily format my article content.
- As an author, I want an export of the final article, so that I can paste it into blogArticles.js to publish it.
- As an author, I want a live preview of how my post looks, so that I know if I screw up the markdown.
- As an author, I want code samples to have syntax highlighting, so that my readers see code as it should appear.

## Technical Requirements and Grading Rubric
- Make sure your code passes ESLint.
- Verify that your exported data correctly captures an article object's structure - that all properties are present and that the body contains HTML markup.
- Integrate libraries to help with markdown and syntax highlighting.
- Use the same HTML template and associated JS code to preview the draft article.
- [+2 points] Extra credit if your "new article" page is *responsive* (including mobile-friendly).
