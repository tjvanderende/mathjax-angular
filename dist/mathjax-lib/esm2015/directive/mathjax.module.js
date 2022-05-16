import { NgModule } from '@angular/core';
import { MathjaxDirective } from './mathjax.directive';
import { MathjaxDefaultConfig, mathjax_url, RootMathjaxConfig, } from '../models';
import * as i0 from "@angular/core";
import * as i1 from "../models";
export class MathjaxModule {
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
MathjaxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, deps: [{ token: i1.RootMathjaxConfig }], target: i0.ɵɵFactoryTarget.NgModule });
MathjaxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, declarations: [MathjaxDirective], exports: [MathjaxDirective] });
MathjaxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: MathjaxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MathjaxDirective],
                    exports: [MathjaxDirective],
                }]
        }], ctorParameters: function () { return [{ type: i1.RootMathjaxConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGpheC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXRoamF4LWxpYi9zcmMvZGlyZWN0aXZlL21hdGhqYXgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQzs7O0FBTW5CLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9CLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUNqRCxFQUFFO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsRUFBRTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxtQkFBbUI7O1FBQ3pCLE1BQU0sS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxRQUFRO1lBQUUsT0FBTztRQUNyQixFQUFFO1FBQ0YsTUFBTSxZQUFZLG1DQUNiLG9CQUFvQixHQUNwQixDQUFDLE1BQUEsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLG1DQUFJLEVBQUUsQ0FBQyxDQUNyQyxDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxHQUFHLGFBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLG1CQUFtQjs7UUFDekIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLFFBQVE7WUFBRSxPQUFPO1FBQ3JCLEVBQUU7UUFDRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBQSxNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLEdBQUcsbUNBQUksV0FBVyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQ25CLE1BQTBCO1FBRTFCLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksRUFBRSxFQUFFLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztJQUNKLENBQUM7OzBHQWpEVSxhQUFhOzJHQUFiLGFBQWEsaUJBSFQsZ0JBQWdCLGFBQ3JCLGdCQUFnQjsyR0FFZixhQUFhOzJGQUFiLGFBQWE7a0JBSnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRoamF4RGlyZWN0aXZlIH0gZnJvbSAnLi9tYXRoamF4LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBNYXRoamF4RGVmYXVsdENvbmZpZyxcbiAgbWF0aGpheF91cmwsXG4gIFJvb3RNYXRoamF4Q29uZmlnLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNYXRoamF4RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01hdGhqYXhEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRoamF4TW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGVDb25maWc6IFJvb3RNYXRoamF4Q29uZmlnKSB7XG4gICAgLy9cbiAgICB0aGlzLmFkZENvbmZpZ1RvRG9jdW1lbnQoKTtcbiAgICAvL1xuICAgIHRoaXMuYWRkTWF0amF4VG9Eb2N1bWVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDb25maWdUb0RvY3VtZW50KCkge1xuICAgIGNvbnN0IHRhZ0lkID0gJ21hdGhqYXgtY29uZmlnLXNjcmlwdCc7XG4gICAgY29uc3QgaXNTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCk7XG4gICAgaWYgKGlzU2NyaXB0KSByZXR1cm47XG4gICAgLy9cbiAgICBjb25zdCBwcm92aWRDb25maWcgPSB7XG4gICAgICAuLi5NYXRoamF4RGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLih0aGlzLm1vZHVsZUNvbmZpZz8uY29uZmlnID8/IHt9KSxcbiAgICB9O1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgIHNjcmlwdC5pZCA9IHRhZ0lkO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnRleHQgPSBgTWF0aEpheCA9ICR7SlNPTi5zdHJpbmdpZnkocHJvdmlkQ29uZmlnKX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTWF0amF4VG9Eb2N1bWVudCgpIHtcbiAgICBjb25zdCB0YWdJZCA9ICdtYXRoamF4LXNjcmlwdCc7XG4gICAgY29uc3QgaXNTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCk7XG4gICAgaWYgKGlzU2NyaXB0KSByZXR1cm47XG4gICAgLy9cbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICBzY3JpcHQuaWQgPSB0YWdJZDtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB0aGlzLm1vZHVsZUNvbmZpZz8uc3JjID8/IG1hdGhqYXhfdXJsO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KFxuICAgIGNvbmZpZz86IFJvb3RNYXRoamF4Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWF0aGpheE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWF0aGpheE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogUm9vdE1hdGhqYXhDb25maWcsIHVzZVZhbHVlOiBjb25maWcgPz8ge30gfV0sXG4gICAgfTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWF0aGpheE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWF0aGpheE1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXX0=