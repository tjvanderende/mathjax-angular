import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { MathjaxContent } from '../models';
import * as i0 from "@angular/core";
export declare class MathjaxDirective implements OnChanges {
    private el;
    private mathJaxExpressions?;
    private readonly element;
    set mathjax(val: MathjaxContent | string);
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    private typeset;
    static ɵfac: i0.ɵɵFactoryDeclaration<MathjaxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MathjaxDirective, "mathjax,[mathjax]", never, { "mathjax": "mathjax"; }, {}, never>;
}
