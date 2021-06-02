
module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
        ],
    },
    darkMode: 'media',
    theme: {
        screens: {
            sm              : '480px',
            md              : '768px',
            lg              : '976px',
            xl              : '1440px',
        },
        colors: {
            'color-brand'   : 'var(--color-brand )',
        },
        fontFamily: {
            sans            : ["var('--font-family-primary')"],
            serif           : ["var('--font-family-secondary')"],
        },
        fontSize: {
            xs              : ['14px', '20px'],
            sm              : ['1rem', '1.25rem'],
            base            : ['20px', '30px'],
            lg              : ['1.5rem', '2rem'],
            xl              : ['2rem', '2.5rem'],
            '2xl'           : ['2.5rem', '3.25rem'],
        },
        extend: {
            spacing: {
                1           : '4px',
                2           : '8px',
                3           : '16px',
                4           : '24px',
                5           : '32px',
                6           : '48px',
                7           : '80px',
                8           : '96px',
            },
            borderRadius: {
                'small'     : 'var(--border-radius-small)',
                'medium'    : 'var(--border-radius-medium)',
            }
        }
    },
    variants: {},
    plugins: [], // if we add forms, do it here
}
