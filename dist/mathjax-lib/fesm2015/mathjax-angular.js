import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

/**
 * will help to check if expression is valid majax or not
 */
const isMathjaxRegExp = /(?:\$|\\\(|\\\[|\\begin\{.*?})/;
//export const isMathJax = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
//
const mathjax_url = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js';
/**
 * config - http://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-mathjax
 */
const MathjaxDefaultConfig = {
    loader: {
        load: ['output/svg', '[tex]/require', '[tex]/ams'],
    },
    tex: {
        inlineMath: [['$', '$']],
        //displayMath: [['$$', '$$']],
        packages: ['base', 'require', 'ams'],
    },
    svg: { fontCache: 'global' },
};
/**
 * config - http://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-mathjax
 * src - cdn url to js
 */
class RootMathjaxConfig {
}

//
//
const isMathjax = (expression) => !!(expression === null || expression === void 0 ? void 0 : expression.match(isMathjaxRegExp));
//
/**
 * find and return mathjax string from input
 * @param expressions
 * @returns mathjax string
 */
const getMathjaxContent = (expressions) => {
    var _a, _b;
    if (!expressions)
        return '';
    else if ('string' === typeof expressions)
        return expressions;
    else
        return (_b = (_a = expressions.latex) !== null && _a !== void 0 ? _a : expressions.mathml) !== null && _b !== void 0 ? _b : '';
};
/**
 * used to fix few issues with mathjax string in angular
 * @param  {string} jax mathjax string
 * @returns {string} fixed string
 */
const fixMathjaxBugs = (jax) => {
    return (jax
        //line break error
        .replace(/<br \/>/gi, '<br/> ')
        //automatic breakline
        .replace(/[$]([\s\S]+?)[$]/gi, (m, p, o, s) => {
        //return /s/gi.test(p)
        return p.includes('\\\\') && !p.includes('\\begin')
            ? `$\\begin{align*}${p}\\end{align*}$`
            : `$${p}$`;
    }));
};

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isMathjax: isMathjax,
    getMathjaxContent: getMathjaxContent,
    fixMathjaxBugs: fixMathjaxBugs
});

class MathjaxDirective {
    //
    constructor(el) {
        this.el = el;
        //
        this.element = el.nativeElement;
    }
    //
    set mathjax(val) {
        this.mathJaxExpressions = val;
    }
    ngOnChanges(changes) {
        const expressions = changes.mathjax;
        if (!expressions ||
            expressions.currentValue === expressions.previousValue) {
            return;
        }
        //
        const value = getMathjaxContent(expressions.currentValue) + '';
        //
        if (isMathjax(value)) {
            const filteredVal = fixMathjaxBugs(value);
            this.typeset(() => {
                this.element.innerHTML = `<div class='jax-process'>${filteredVal}</div>`;
            });
        }
        else {
            this.element.innerHTML = value;
        }
    }
    typeset(code) {
        if (MathJax === null || MathJax === void 0 ? void 0 : MathJax.startup) {
            MathJax.startup.promise = MathJax.startup.promise
                .then(() => {
                code();
                return MathJax.typesetPromise ? MathJax.typesetPromise() : null;
            })
                .catch((err) => console.error('MathJax Typeset failed: ' + err.message));
            return MathJax.startup.promise;
        }
        else {
            code();
        }
    }
}
MathjaxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
MathjaxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.1", type: MathjaxDirective, selector: "mathjax,[mathjax]", inputs: { mathjax: "mathjax" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'mathjax,[mathjax]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { mathjax: [{
                type: Input,
                args: ['mathjax']
            }] } });

class MathjaxModule {
    constructor(moduleConfig) {
        this.moduleConfig = moduleConfig;
        //
        this.addConfigToDocument();
        //
        this.addMatjaxToDocument();
    }
    addConfigToDocument() {
        var _a, _b;
        const tagId = 'mathjax-config-script';
        const isScript = document.getElementById(tagId);
        if (isScript)
            return;
        //
        const providConfig = Object.assign(Object.assign({}, MathjaxDefaultConfig), ((_b = (_a = this.moduleConfig) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {}));
        const script = document.createElement('script');
        script.id = tagId;
        script.type = 'text/javascript';
        script.text = `MathJax = ${JSON.stringify(providConfig)}`;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    addMatjaxToDocument() {
        var _a, _b;
        const tagId = 'mathjax-script';
        const isScript = document.getElementById(tagId);
        if (isScript)
            return;
        //
        const script = document.createElement('script');
        script.id = tagId;
        script.type = 'text/javascript';
        script.src = (_b = (_a = this.moduleConfig) === null || _a === void 0 ? void 0 : _a.src) !== null && _b !== void 0 ? _b : mathjax_url;
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    static forRoot(config) {
        return {
            ngModule: MathjaxModule,
            providers: [{ provide: RootMathjaxConfig, useValue: config !== null && config !== void 0 ? config : {} }],
        };
    }
    static forChild() {
        return {
            ngModule: MathjaxModule,
        };
    }
}
MathjaxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, deps: [{ token: RootMathjaxConfig }], target: i0.ɵɵFactoryTarget.NgModule });
MathjaxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, declarations: [MathjaxDirective], exports: [MathjaxDirective] });
MathjaxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MathjaxDirective],
                    exports: [MathjaxDirective],
                }]
        }], ctorParameters: function () { return [{ type: RootMathjaxConfig }]; } });

//

/*
 * Public API Surface of mathjax-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { utils as MathJaxUtils, MathjaxDirective, MathjaxModule };
//# sourceMappingURL=mathjax-angular.js.map
