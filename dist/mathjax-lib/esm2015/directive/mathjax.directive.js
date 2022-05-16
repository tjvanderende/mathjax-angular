import { Directive, Input, } from '@angular/core';
import { fixMathjaxBugs, getMathjaxContent, isMathjax } from '../utils';
import * as i0 from "@angular/core";
export class MathjaxDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGpheC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRoamF4LWxpYi9zcmMvZGlyZWN0aXZlL21hdGhqYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxHQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQU14RSxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLEVBQUU7SUFDRixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQyxFQUFFO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFURCxFQUFFO0lBQ0YsSUFDSSxPQUFPLENBQUMsR0FBNEI7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBT0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFDRSxDQUFDLFdBQVc7WUFDWixXQUFXLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxhQUFhLEVBQ3REO1lBQ0EsT0FBTztTQUNSO1FBQ0QsRUFBRTtRQUNGLE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0QsRUFBRTtRQUNGLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLFdBQVcsUUFBUSxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTyxPQUFPLENBQUMsSUFBZ0I7UUFDOUIsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTztpQkFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xFLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDeEQsQ0FBQztZQUNKLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksRUFBRSxDQUFDO1NBQ1I7SUFDSCxDQUFDOzs2R0FuRFUsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5QjtpR0FRSyxPQUFPO3NCQURWLEtBQUs7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaXhNYXRoamF4QnVncywgZ2V0TWF0aGpheENvbnRlbnQsIGlzTWF0aGpheCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1hdGhqYXhDb250ZW50IH0gZnJvbSAnLi4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0aGpheCxbbWF0aGpheF0nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRoamF4RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLy9cbiAgcHJpdmF0ZSBtYXRoSmF4RXhwcmVzc2lvbnM/OiBNYXRoamF4Q29udGVudCB8IHN0cmluZztcbiAgLy9cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgLy9cbiAgQElucHV0KCdtYXRoamF4JylcbiAgc2V0IG1hdGhqYXgodmFsOiBNYXRoamF4Q29udGVudCB8IHN0cmluZykge1xuICAgIHRoaXMubWF0aEpheEV4cHJlc3Npb25zID0gdmFsO1xuICB9XG4gIC8vXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAvL1xuICAgIHRoaXMuZWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgZXhwcmVzc2lvbnMgPSBjaGFuZ2VzLm1hdGhqYXg7XG4gICAgaWYgKFxuICAgICAgIWV4cHJlc3Npb25zIHx8XG4gICAgICBleHByZXNzaW9ucy5jdXJyZW50VmFsdWUgPT09IGV4cHJlc3Npb25zLnByZXZpb3VzVmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9cbiAgICBjb25zdCB2YWx1ZSA9IGdldE1hdGhqYXhDb250ZW50KGV4cHJlc3Npb25zLmN1cnJlbnRWYWx1ZSkgKyAnJztcbiAgICAvL1xuICAgIGlmIChpc01hdGhqYXgodmFsdWUpKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFZhbCA9IGZpeE1hdGhqYXhCdWdzKHZhbHVlKTtcbiAgICAgIHRoaXMudHlwZXNldCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0namF4LXByb2Nlc3MnPiR7ZmlsdGVyZWRWYWx9PC9kaXY+YDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0eXBlc2V0KGNvZGU6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoTWF0aEpheD8uc3RhcnR1cCkge1xuICAgICAgTWF0aEpheC5zdGFydHVwLnByb21pc2UgPSBNYXRoSmF4LnN0YXJ0dXAucHJvbWlzZVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29kZSgpO1xuICAgICAgICAgIHJldHVybiBNYXRoSmF4LnR5cGVzZXRQcm9taXNlID8gTWF0aEpheC50eXBlc2V0UHJvbWlzZSgpIDogbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGhKYXggVHlwZXNldCBmYWlsZWQ6ICcgKyBlcnIubWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBNYXRoSmF4LnN0YXJ0dXAucHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29kZSgpO1xuICAgIH1cbiAgfVxufVxuIl19