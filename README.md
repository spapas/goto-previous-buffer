# goto-previous-buffer

Marketplace link: https://marketplace.visualstudio.com/items?itemName=serafeim.goto-previous-buffer

This is a really simple plugin that offers a single command for moving to the previous buffer (window/file etc) you were viewing.
This should is similar to how the `<c-^>` or `:buffer#` command works in VIM. This is something that most VIM users use all the time
(and probably have mapped to a better key like `shift+tab`). The workflow is similar to this:

I am editing a file `A` to add something. Then I press `ctrl+p` to jump to another file `B` to use what I just added. Then (of course) I
forget what I did on file `A` so I quickly switch back to `A` to take a peek at what I did there and immediately switch back
to `B` to once again do the change. The after a while I will need take a peek *again* to `A`, etc. Using this you should be able to do
that very quickly.

*Notice that I used the "buffer" word to make the connection with VIM :)*

## Extension Settings

You will need to add a keyboard shortcut to execute the `goto-previous-buffer` command. I recommend assigning it to `shift+tab` or `ctrl-shift+tab` (I know
that these keyboards are already assigned to move the indentation left or cycle to the other open buffers but I use that thing all the time so I recommend assigning it to an easy combination). You can also use `ctrl+6` like vim! To do that press `ctrl+shift+p` and then search for `open keyboard shortcuts`. In the filter in this write `goto-previous-buffer` and then click the cross or pencil to change the shortcut to your desired one.

Example JSON keybindings configuration:

```json
[
    {
        "key": "shift+tab",
        "command": "goto-previous-buffer.goto-previous-buffer",
    }
]
```

## Known Issues

None that I know of. This probably won't work when the previous thing you visited was not a real file :)

## Release Notes

### 1.0.2

Update license.

### 1.0.1

Change README.

### 1.0.0

Initial release.
