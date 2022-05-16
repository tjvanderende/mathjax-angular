//
import { isMathjaxRegExp } from './models';
//
export const isMathjax = (expression) => !!(expression === null || expression === void 0 ? void 0 : expression.match(isMathjaxRegExp));
//
/**
 * find and return mathjax string from input
 * @param expressions
 * @returns mathjax string
 */
export const getMathjaxContent = (expressions) => {
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
export const fixMathjaxBugs = (jax) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9tYXRoamF4LWxpYi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRTtBQUVGLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sVUFBVSxDQUFDO0FBRTNELEVBQUU7QUFDRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxVQUFrQixFQUFXLEVBQUUsQ0FDdkQsQ0FBQyxDQUFDLENBQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO0FBRXZDLEVBQUU7QUFDRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsV0FBb0MsRUFDNUIsRUFBRTs7SUFDVixJQUFJLENBQUMsV0FBVztRQUFFLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCLElBQUksUUFBUSxLQUFLLE9BQU8sV0FBVztRQUFFLE9BQU8sV0FBcUIsQ0FBQzs7UUFDbEUsT0FBTyxNQUFBLE1BQUEsV0FBVyxDQUFDLEtBQUssbUNBQUksV0FBVyxDQUFDLE1BQU0sbUNBQUksRUFBRSxDQUFDO0FBQzVELENBQUMsQ0FBQztBQUNGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUNwRCxPQUFPLENBQ0wsR0FBRztRQUNELGtCQUFrQjtTQUNqQixPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztRQUMvQixxQkFBcUI7U0FDcEIsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEQsc0JBQXNCO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0I7WUFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUMsQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9cblxuaW1wb3J0IHsgaXNNYXRoamF4UmVnRXhwLCBNYXRoamF4Q29udGVudCB9IGZyb20gJy4vbW9kZWxzJztcblxuLy9cbmV4cG9ydCBjb25zdCBpc01hdGhqYXggPSAoZXhwcmVzc2lvbjogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAhIWV4cHJlc3Npb24/Lm1hdGNoKGlzTWF0aGpheFJlZ0V4cCk7XG5cbi8vXG4vKipcbiAqIGZpbmQgYW5kIHJldHVybiBtYXRoamF4IHN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gZXhwcmVzc2lvbnNcbiAqIEByZXR1cm5zIG1hdGhqYXggc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNYXRoamF4Q29udGVudCA9IChcbiAgZXhwcmVzc2lvbnM6IE1hdGhqYXhDb250ZW50IHwgc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoIWV4cHJlc3Npb25zKSByZXR1cm4gJyc7XG4gIGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZXhwcmVzc2lvbnMpIHJldHVybiBleHByZXNzaW9ucyBhcyBzdHJpbmc7XG4gIGVsc2UgcmV0dXJuIGV4cHJlc3Npb25zLmxhdGV4ID8/IGV4cHJlc3Npb25zLm1hdGhtbCA/PyAnJztcbn07XG4vKipcbiAqIHVzZWQgdG8gZml4IGZldyBpc3N1ZXMgd2l0aCBtYXRoamF4IHN0cmluZyBpbiBhbmd1bGFyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGpheCBtYXRoamF4IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gZml4ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBmaXhNYXRoamF4QnVncyA9IChqYXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiAoXG4gICAgamF4XG4gICAgICAvL2xpbmUgYnJlYWsgZXJyb3JcbiAgICAgIC5yZXBsYWNlKC88YnIgXFwvPi9naSwgJzxici8+ICcpXG4gICAgICAvL2F1dG9tYXRpYyBicmVha2xpbmVcbiAgICAgIC5yZXBsYWNlKC9bJF0oW1xcc1xcU10rPylbJF0vZ2ksIChtLCBwOiBzdHJpbmcsIG8sIHMpID0+IHtcbiAgICAgICAgLy9yZXR1cm4gL3MvZ2kudGVzdChwKVxuICAgICAgICByZXR1cm4gcC5pbmNsdWRlcygnXFxcXFxcXFwnKSAmJiAhcC5pbmNsdWRlcygnXFxcXGJlZ2luJylcbiAgICAgICAgICA/IGAkXFxcXGJlZ2lue2FsaWduKn0ke3B9XFxcXGVuZHthbGlnbip9JGBcbiAgICAgICAgICA6IGAkJHtwfSRgO1xuICAgICAgfSlcbiAgKTtcbn07XG4iXX0=