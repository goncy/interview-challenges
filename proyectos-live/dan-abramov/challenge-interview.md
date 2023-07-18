# Center the content

You have to center the "hi mom" text in the middle of the screen, but you can't use flexbox.

# React file list challenge

This awesome feature called server components will make it to production next week, someone made an animated intro for the keynote presentation that sums up very well the feature in 10 seconds, showing a tree with different colors for client and server components.

![keynote](./public/keynote.png)

Our client, "molecule text editor" assigned you to work on the "sidebar > files" team. They want to have a files tree component that shows `*.server` and `*.client` files with different colors (and their correct indentation).

![demo](./public/demo.png)

They left two mock files (data-nested.json and data-plain.json) in the project for you to choose which structure do you preffer. As usual friendly backenders, they said you can pick whatever file structure you want and they will refactor everything on their side based on your decission.

Tasks list:

- [] Show all folders and files using `ul` and `li` elements.
- [] Files and folders should have correct indentation based on how levels deep they are
- [] Folders can be toggled to show / hide their content
- [] `*.server` and `*.client` files should have different colors than the rest of the files
