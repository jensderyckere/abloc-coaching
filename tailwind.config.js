module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'md': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'dark': '#101010',
            'ligthdark': '#474747',
        }),
        fontFamily: {
            'primary': ['Manrope'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}