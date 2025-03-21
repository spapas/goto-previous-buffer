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

You can run the command yourself by the command pallet (ctrl+shift+p) and `Goto previous buffer`. By default the `ctrl+shift+tab` is assigned to that cmd
(I know that this keybinding is already assigned to  cycle to the other open buffers but I use that thing all the time so I recommend assigning it to an easy combination).

To change the keybinding press `ctrl+shift+p` and then search for `open keyboard shortcuts`. In the filter write `goto-previous-buffer` and then click the cross or pencil to change the shortcut to your desired one.
You could use `ctrl+6` like vim! 

## Known Issues

None that I know of. This probably won't work when the previous thing you visited was not a real file :)

## Release Notes


### 1.1.1

Fix readme

### 1.1.0

Small updates

### 1.0.2

Update license.

### 1.0.1

Change README.

### 1.0.0

Initial release.
