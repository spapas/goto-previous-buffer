# goto-previous-buffer README

Marketplace link: https://marketplace.visualstudio.com/items?itemName=serafeim.goto-previous-buffer

This is a really simple plugin that offers a single command for moving to the previous buffer (window/file etc) you were viewing.
This should is similar to how the <c-^> or :buffer# command works in VIM. This is something that most VIM users use all the time
(and probably have mapped to a better key like shift+tab). The workflow is similar to this:

I am editing a file `A` to add something. Then I press ctrl+p to jump to another file `B` to use what I just added. Then (of course) I
forget what I did on file `A` so I quickly switch back to A to take a peek at what I did there and immediately switch back
to `B` to once again do the change. The after a while I will need take a peek *again* to `A`, etc. Using this you should be able to do
that very quickly.

*Notice that I used the "buffer" word to make the connection with VIM :)*

## Extension Settings

You will need to add a keyboard shortcut to execute the `goto-previous-buffer` command. I recommend assigning it to `shift+tab` (I know
this moves the indentation left but backspace should also sufficec for that and since you'll want to use that command all the time I
recommend assigning it to an easy combination).

## Known Issues

None that I know of.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release.
