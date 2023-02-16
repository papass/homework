export function useCalc () {
    const actions = ['Сложение', 'Вычитание', "Умножение", "Деление", "Остаток от деления", "Возведение в степень"]

    const calc = (action: string, val1: number, val2: number) => {
        let res = 0
        switch(action) {
            case 'Сложение':
                res = val1 + val2
                break;
            case 'Вычитание':
                res = val1 - val2
                break;    
            case 'Умножение':
                res = val1 * val2
                break;   
            case 'Деление':
                res = val1 / val2
                break;   
            case 'Остаток от деления':
                res = val1 % val2
                break;   
            case 'Возведение в степень':
                res = Math.pow(val1, val2)
                break;   
        }
        return res
    }

    return {actions, calc }
}