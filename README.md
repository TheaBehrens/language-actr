# language-actr package

A very preliminary version of syntax highlighting for the cognitive modeling language [ACT-R](http://act-r.psy.cmu.edu/).
Some keywords are recognized (ISA, chunk-type) and buffer-names are treated like functions.
Code folding works (thanks to the code already written for 'normal' lisp).

Files with the extension ".lisp" are recognized and highlighted accordingly.

I copied the stuff in grammars/actr.cson mostly from a github page on lisp syntax highlighting here:
https://github.com/enriquefernandez/language-lisp

For proper Lisp indentation and better editing experience this package should be used in conjunction with some advanced editing tool, for example [Parinfer](https://atom.io/packages/parinfer)


Edit the file grammars/actr.cson if you want to add some patterns to be highlighted or change existing ones.
