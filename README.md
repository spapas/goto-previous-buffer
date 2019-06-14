# goto-previous-buffer README

This is a really simple plugin that offers a single command for moving to the previous buffer (window/file etc) you were viewing.
This should is similar to how the <c-^> or :buffer# command works in VIM. This is something that most VIM users use all the time
(and probably have mapped to a better key like shift+tab). The workflow is similar to this:

I am editing a file `A` to add something. Then I press ctrl+p to jump to another file `B` to use what I just added. Then (of course) I
forget what I did on file `A` so I quickly switch back to A to take a peek at what I did there and immediately switch back
to `B` to once again do the change. The after a while I will need take a peek *again* to `A`, etc. Using this you should be able to do
that very quickly.

## Extension Settings


* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

None that I know of.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release.
