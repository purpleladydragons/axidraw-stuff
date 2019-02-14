"use strict";
exports.__esModule = true;
var SVG = require("svg.js");
var _ = require("lodash/fp");
var draw = SVG('drawing').size(500, 500);
_.map(function (n) { return draw.rect(20, 20).attr({ x: n, y: n * 5, fill: null }); }, [1, 2, 3, 4, 5]);
