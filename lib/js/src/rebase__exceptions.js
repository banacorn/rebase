'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var InvalidArgument = Caml_exceptions.create("Rebase__exceptions.InvalidArgument");

var IndexOutOfBounds = Caml_exceptions.create("Rebase__exceptions.IndexOutOfBounds");

exports.InvalidArgument  = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
/* No side effect */