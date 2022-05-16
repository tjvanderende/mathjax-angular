(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mathjax-angular', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mathjax-angular'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /**
     * will help to check if expression is valid majax or not
     */
    var isMathjaxRegExp = /(?:\$|\\\(|\\\[|\\begin\{.*?})/;
    //export const isMathJax = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    //
    var mathjax_url = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js';
    /**
     * config - http://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-mathjax
     */
    var MathjaxDefaultConfig = {
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
    var RootMathjaxConfig = /** @class */ (function () {
        function RootMathjaxConfig() {
        }
        return RootMathjaxConfig;
    }());

    //
    //
    var isMathjax = function (expression) { return !!(expression === null || expression === void 0 ? void 0 : expression.match(isMathjaxRegExp)); };
    //
    /**
     * find and return mathjax string from input
     * @param expressions
     * @returns mathjax string
     */
    var getMathjaxContent = function (expressions) {
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
    var fixMathjaxBugs = function (jax) {
        return (jax
            //line break error
            .replace(/<br \/>/gi, '<br/> ')
            //automatic breakline
            .replace(/[$]([\s\S]+?)[$]/gi, function (m, p, o, s) {
            //return /s/gi.test(p)
            return p.includes('\\\\') && !p.includes('\\begin')
                ? "$\\begin{align*}" + p + "\\end{align*}$"
                : "$" + p + "$";
        }));
    };

    var utils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isMathjax: isMathjax,
        getMathjaxContent: getMathjaxContent,
        fixMathjaxBugs: fixMathjaxBugs
    });

    var MathjaxDirective = /** @class */ (function () {
        //
        function MathjaxDirective(el) {
            this.el = el;
            //
            this.element = el.nativeElement;
        }
        Object.defineProperty(MathjaxDirective.prototype, "mathjax", {
            //
            set: function (val) {
                this.mathJaxExpressions = val;
            },
            enumerable: false,
            configurable: true
        });
        MathjaxDirective.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var expressions = changes.mathjax;
            if (!expressions ||
                expressions.currentValue === expressions.previousValue) {
                return;
            }
            //
            var value = getMathjaxContent(expressions.currentValue) + '';
            //
            if (isMathjax(value)) {
                var filteredVal_1 = fixMathjaxBugs(value);
                this.typeset(function () {
                    _this.element.innerHTML = "<div class='jax-process'>" + filteredVal_1 + "</div>";
                });
            }
            else {
                this.element.innerHTML = value;
            }
        };
        MathjaxDirective.prototype.typeset = function (code) {
            if (MathJax === null || MathJax === void 0 ? void 0 : MathJax.startup) {
                MathJax.startup.promise = MathJax.startup.promise
                    .then(function () {
                    code();
                    return MathJax.typesetPromise ? MathJax.typesetPromise() : null;
                })
                    .catch(function (err) { return console.error('MathJax Typeset failed: ' + err.message); });
                return MathJax.startup.promise;
            }
            else {
                code();
            }
        };
        return MathjaxDirective;
    }());
    MathjaxDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxDirective, deps: [{ token: i0__namespace.ElementRef }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    MathjaxDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.1", type: MathjaxDirective, selector: "mathjax,[mathjax]", inputs: { mathjax: "mathjax" }, usesOnChanges: true, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: 'mathjax,[mathjax]',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }]; }, propDecorators: { mathjax: [{
                    type: i0.Input,
                    args: ['mathjax']
                }] } });

    var MathjaxModule = /** @class */ (function () {
        function MathjaxModule(moduleConfig) {
            this.moduleConfig = moduleConfig;
            //
            this.addConfigToDocument();
            //
            this.addMatjaxToDocument();
        }
        MathjaxModule.prototype.addConfigToDocument = function () {
            var _a, _b;
            var tagId = 'mathjax-config-script';
            var isScript = document.getElementById(tagId);
            if (isScript)
                return;
            //
            var providConfig = Object.assign(Object.assign({}, MathjaxDefaultConfig), ((_b = (_a = this.moduleConfig) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {}));
            var script = document.createElement('script');
            script.id = tagId;
            script.type = 'text/javascript';
            script.text = "MathJax = " + JSON.stringify(providConfig);
            document.getElementsByTagName('head')[0].appendChild(script);
        };
        MathjaxModule.prototype.addMatjaxToDocument = function () {
            var _a, _b;
            var tagId = 'mathjax-script';
            var isScript = document.getElementById(tagId);
            if (isScript)
                return;
            //
            var script = document.createElement('script');
            script.id = tagId;
            script.type = 'text/javascript';
            script.src = (_b = (_a = this.moduleConfig) === null || _a === void 0 ? void 0 : _a.src) !== null && _b !== void 0 ? _b : mathjax_url;
            script.async = true;
            document.getElementsByTagName('head')[0].appendChild(script);
        };
        MathjaxModule.forRoot = function (config) {
            return {
                ngModule: MathjaxModule,
                providers: [{ provide: RootMathjaxConfig, useValue: config !== null && config !== void 0 ? config : {} }],
            };
        };
        MathjaxModule.forChild = function () {
            return {
                ngModule: MathjaxModule,
            };
        };
        return MathjaxModule;
    }());
    MathjaxModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxModule, deps: [{ token: RootMathjaxConfig }], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MathjaxModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxModule, declarations: [MathjaxDirective], exports: [MathjaxDirective] });
    MathjaxModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxModule });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: MathjaxModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [MathjaxDirective],
                        exports: [MathjaxDirective],
                    }]
            }], ctorParameters: function () { return [{ type: RootMathjaxConfig }]; } });

    //

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MathJaxUtils = utils;
    exports.MathjaxDirective = MathjaxDirective;
    exports.MathjaxModule = MathjaxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mathjax-angular.umd.js.map
