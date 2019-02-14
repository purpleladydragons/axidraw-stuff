import SVG from 'svg.js';
import * as _ from 'lodash/fp';

console.log(SVG, typeof(SVG));

/* For whatever, terrible, stupid, godawful reason,
   SVG gets imported as a union type of bool | function.
   I don't know why. But I can't just fucking call SVG(),
   I have to first check that SVG is a function. Which makes
   sense since it's a union type, but why the fuck is it a union type?
   Why the fuck is an import a union type?
 */
var draw: any;
if (typeof SVG === "function") {
    draw = SVG('drawing').size(500, 500);
}

const squareSize : number = 20;
const xMargin : number = 50;
_.map((yIdx: number) =>
      _.map(
          (n: number) => {
              let randAngle : number = Math.floor(Math.random() * yIdx * 10);
              draw.rect(squareSize, squareSize)
                  .attr({
                      x: n * squareSize + xMargin,
                      y: yIdx * squareSize,
                      fill: 'transparent'
                  })
                  .stroke('#f06')
                  .transform({rotation: randAngle, relative: true})
          },
          _.range(0, 5)),
      _.range(0, 10)
     );
