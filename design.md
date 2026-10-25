# Design sketch

## Screen
One page with:
- a heading, "Reading List"
- a form: Title, Author and an "Add" button
- the list of books. Each row has a tick box and the text "Title by Author".
  A ticked book is shown crossed out.
- a short message, "No books yet. Add one above.", when the list is empty

## Data
Each book has: title (text), author (text), read (true or false).
All books are kept in one list, saved in the browser as JSON under the key "books".

## Rules
- Title and author are both required; spaces alone do not count.
- Books are shown in the order they were added.
